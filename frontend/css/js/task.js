const selectedTaskId = localStorage.getItem("selectedTaskId");

const taskTitle = document.getElementById("taskTitle");
const taskSubject = document.getElementById("taskSubject");
const taskDescription = document.getElementById("taskDescription");
const taskDueDate = document.getElementById("taskDueDate");
const taskPriority = document.getElementById("taskPriority");
const taskStatus = document.getElementById("taskStatus");

const completeTaskButton =
    document.getElementById("completeTaskButton");

const editTaskButton =
    document.getElementById("editTaskButton");

const deleteTaskButton =
    document.getElementById("deleteTaskButton");

let currentTask = null;

// Load task
async function loadTask() {

    const token = localStorage.getItem("authToken");

    if (!token) {
        window.location.href = "login.html";
        return;
    }

    if (!selectedTaskId) {
        document.querySelector(".task-detail").innerHTML =
            "<p>Task not found.</p>";
        return;
    }

    try {

        const response = await fetch(
            `${API_BASE_URL}/api/tasks/${selectedTaskId}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("authToken");
            window.location.href = "login.html";
            return;
        }

        if (!response.ok) {
            throw new Error("Task not found");
        }

        currentTask = await response.json();

        taskTitle.textContent = currentTask.title;
        taskSubject.textContent = currentTask.subject;
        taskDescription.textContent = currentTask.description;
        taskDueDate.textContent = currentTask.dueDate;
        taskPriority.textContent = currentTask.priority;
        taskStatus.textContent = currentTask.status;

    } catch (error) {

        console.error("Error loading task:", error);

        document.querySelector(".task-detail").innerHTML =
            "<p>Unable to load task.</p>";
    }
}


// Complete task
completeTaskButton.addEventListener("click", async function () {

    if (!currentTask) {
        return;
    }

    const token = localStorage.getItem("authToken");

    try {

        const response = await fetch(
            `${API_BASE_URL}/api/tasks/${selectedTaskId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: currentTask.title,
                    subject: currentTask.subject,
                    description: currentTask.description,
                    dueDate: currentTask.dueDate,
                    priority: currentTask.priority,
                    status: "Completed"
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to complete task");
        }

        currentTask.status = "Completed";
        taskStatus.textContent = "Completed";

        alert("Task marked as completed!");

    } catch (error) {

        console.error("Complete error:", error);
        alert("Unable to complete task.");
    }
});


// Delete task
deleteTaskButton.addEventListener("click", async function () {

    if (!currentTask) {
        return;
    }

    const confirmDelete =
        confirm("Are you sure you want to delete this task?");

    if (!confirmDelete) {
        return;
    }

    const token = localStorage.getItem("authToken");

    try {

        const response = await fetch(
            `${API_BASE_URL}/api/tasks/${selectedTaskId}`,
            {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            throw new Error("Failed to delete task");
        }

        localStorage.removeItem("selectedTaskId");

        alert("Task deleted successfully!");

        window.location.href = "dashboard.html";

    } catch (error) {

        console.error("Delete error:", error);
        alert("Unable to delete task.");
    }
});


// Edit task
editTaskButton.addEventListener("click", function () {

    localStorage.setItem("editTaskId", selectedTaskId);

    window.location.href = "add-task.html";
});


// Load task when page opens
loadTask();
