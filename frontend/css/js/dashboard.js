alert("Dashboard JavaScript is working!");
// Add New Task button

const addTaskButton = document.getElementById("addTaskButton");

if (addTaskButton) {
    addTaskButton.addEventListener("click", function () {
        window.location.href = "add-task.html";
    });
}
// Get the task list container
const taskList = document.getElementById("taskList");

// Get the statistics elements
const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

// Get saved tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks on the dashboard
function displayTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks added yet.</p>";
        return;
    }

    tasks.forEach(function (task, index) {

        const taskCard = document.createElement("div");

        taskCard.className = "task-card";

        taskCard.innerHTML = `
            <h3>${task.title}</h3>

            <p>
                <strong>Subject:</strong> ${task.subject}
            </p>

            <p>
                <strong>Due:</strong> ${task.dueDate}
            </p>

            <p>
                <strong>Priority:</strong> ${task.priority}
            </p>

            <p>
                <strong>Status:</strong> ${task.status}
            </p>

            <button onclick="viewTask(${index})">
                View Task
            </button>
        `;

        taskList.appendChild(taskCard);
    });
}


// Update task statistics
function updateStatistics() {

    const total = tasks.length;

    const pending = tasks.filter(function (task) {
        return task.status === "Pending";
    }).length;

    const completed = tasks.filter(function (task) {
        return task.status === "Completed";
    }).length;

    totalTasks.textContent = total;
    pendingTasks.textContent = pending;
    completedTasks.textContent = completed;
}


// Open task details
function viewTask(index) {

    localStorage.setItem("selectedTask", index);

    window.location.href = "task.html";
}


// Run the functions
displayTasks();
updateStatistics();
