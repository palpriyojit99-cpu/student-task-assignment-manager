// Get the selected task index
const selectedTaskIndex = localStorage.getItem("selectedTask");

// Get all saved tasks
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Check whether a valid task was selected
if (selectedTaskIndex !== null && tasks[selectedTaskIndex]) {

    const task = tasks[selectedTaskIndex];

    // Display task information
    document.getElementById("taskTitle").textContent = task.title;

    document.getElementById("taskSubject").textContent = task.subject;

    document.getElementById("taskDescription").textContent =
        task.description;

    document.getElementById("taskDueDate").textContent =
        task.dueDate;

    document.getElementById("taskPriority").textContent =
        task.priority;

    document.getElementById("taskStatus").textContent =
        task.status;

} else {

    // No valid task was selected
    document.querySelector(".task-detail").innerHTML =
        "<p>Task not found.</p>";
}
