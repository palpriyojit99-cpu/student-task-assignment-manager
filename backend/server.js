import express from "express";
import { JSONFilePreset } from "lowdb/node";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Authentication middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            error: "Access token required"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                error: "Invalid or expired token"
            });
        }

        req.user = user;
        next();
    });
}

// Connect to JSON database
const db = await JSONFilePreset("db.json", {
    tasks: []
});

// Login
app.post("/api/auth/login", (req, res) => {
    const { username, password } = req.body;

    if (
        username !== process.env.DEMO_USERNAME ||
        password !== process.env.DEMO_PASSWORD
    ) {
        return res.status(401).json({
            error: "Invalid username or password"
        });
    }

    const token = jwt.sign(
        { username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login successful",
        token
    });
});

// GET all tasks
app.get("/api/tasks", authenticateToken, (req, res) => {
    res.json(db.data.tasks);
});

// GET a single task by ID
app.get("/api/tasks/:id", authenticateToken, (req, res) => {
    const id = parseInt(req.params.id);

    const task = db.data.tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.json(task);
});

// POST a new task
app.post("/api/tasks", authenticateToken, async (req, res) => {
    const { title, subject, description, dueDate, priority } = req.body;

    if (!title || typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    if (!subject || typeof subject !== "string" || subject.trim() === "") {
        return res.status(400).json({
            error: "Subject is required"
        });
    }

    const allowedPriorities = ["Low", "Medium", "High"];

    if (priority && !allowedPriorities.includes(priority)) {
        return res.status(400).json({
            error: "Priority must be Low, Medium, or High"
        });
    }

    const tasks = db.data.tasks;

    const newId = tasks.length > 0
        ? Math.max(...tasks.map(task => task.id)) + 1
        : 1;

    const newTask = {
        id: newId,
        title: title.trim(),
        subject: subject.trim(),
        description: description || "",
        dueDate: dueDate || "",
        priority: priority || "Medium",
        status: "Pending"
    };

    tasks.push(newTask);

    await db.write();

    res.status(201).json(newTask);
});

// PUT - Update a task
app.put("/api/tasks/:id", authenticateToken, async (req, res) => {
    const id = parseInt(req.params.id);

    const task = db.data.tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const { title, subject, description, dueDate, priority, status } = req.body;

    if (title !== undefined) {
        if (typeof title !== "string" || title.trim() === "") {
            return res.status(400).json({
                error: "Title cannot be empty"
            });
        }
        task.title = title.trim();
    }

    if (subject !== undefined) {
        if (typeof subject !== "string" || subject.trim() === "") {
            return res.status(400).json({
                error: "Subject cannot be empty"
            });
        }
        task.subject = subject.trim();
    }

    if (description !== undefined) task.description = description;
    if (dueDate !== undefined) task.dueDate = dueDate;

    if (priority !== undefined) {
        const allowedPriorities = ["Low", "Medium", "High"];

        if (!allowedPriorities.includes(priority)) {
            return res.status(400).json({
                error: "Priority must be Low, Medium, or High"
            });
        }

        task.priority = priority;
    }

    if (status !== undefined) {
        const allowedStatuses = ["Pending", "Completed"];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                error: "Status must be Pending or Completed"
            });
        }

        task.status = status;
    }

    await db.write();

    res.json(task);
});

// DELETE - Delete a task
app.delete("/api/tasks/:id", authenticateToken, async (req, res) => {
    const id = parseInt(req.params.id);

    const tasks = db.data.tasks;

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];

    await db.write();

    res.json({
        message: "Task deleted successfully",
        task: deletedTask
    });
});

// Home route
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        service: "Student Task & Assignment Manager API"
    });
});

app.get("/", (req, res) => {
    res.json({
        message: "Student Task & Assignment Manager API is running!"
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
