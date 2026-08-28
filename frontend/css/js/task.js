// Get the selected task index
const selectedTaskIndex = localStorage.getItem("selectedTask");

// Get all saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Get task elements
const taskTitle = document.getElementById("taskTitle");
const taskSubject = document.getElementById("taskSubject");
const taskDescription = document.getElementById("taskDescription");
const taskDueDate = document.getElementById("taskDueDate");
const taskPriority = document.getElementById("taskPriority");
const taskStatus = document.getElementById("taskStatus");

// Get action buttons
const completeTaskButton =
    document.getElementById("completeTaskButton");

const editTaskButton =
    document.getElementById("editTaskButton");

const deleteTaskButton =
    document.getElementById("deleteTaskButton");


// Check whether the selected task exists
if (selectedTaskIndex !== null && tasks[selectedTaskIndex]) {

    const task = tasks[selectedTaskIndex];

    // Display task information
    taskTitle.textContent = task.title;
    taskSubject.textContent = task.subject;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = task.dueDate;
    taskPriority.textContent = task.priority;
    taskStatus.textContent = task.status;


    // Mark task as complete
    completeTaskButton.addEventListener("click", function () {

        tasks[selectedTaskIndex].status = "Completed";

        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskStatus.textContent = "Completed";

        alert("Task marked as completed!");

    });


    // Delete task
    deleteTaskButton.addEventListener("click", function () {

        const confirmDelete =
            confirm("Are you sure you want to delete this task?");

        if (confirmDelete) {

            tasks.splice(selectedTaskIndex, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            localStorage.removeItem("selectedTask");

            alert("Task deleted successfully!");

            window.location.href = "dashboard.html";
        }

    });

// Edit task
editTaskButton.addEventListener("click", function () {

    localStorage.setItem("editTaskIndex", selectedTaskIndex);

    window.location.href = "add-task.html";

});
  

} else {

    // No valid task found
    document.querySelector(".task-detail").innerHTML =
        "<p>Task not found.</p>";
}
