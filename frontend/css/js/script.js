// Get the task form
const taskForm = document.getElementById("taskForm");

// Check whether the form exists on the current page
if (taskForm) {

    taskForm.addEventListener("submit", function (event) {

        // Stop the browser from refreshing the page
        event.preventDefault();

        // Get values entered by the user
        const title = document.getElementById("taskTitleInput").value;
        const subject = document.getElementById("taskSubjectInput").value;
        const description = document.getElementById("taskDescriptionInput").value;
        const dueDate = document.getElementById("taskDueDateInput").value;
        const priority = document.getElementById("taskPriorityInput").value;

        // Create a task object
        const newTask = {
            title: title,
            subject: subject,
            description: description,
            dueDate: dueDate,
            priority: priority,
            status: "Pending"
        };

        // Get existing tasks from localStorage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Add the new task
        tasks.push(newTask);

        // Save the updated task list
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Go back to dashboard
        window.location.href = "dashboard.html";
    });
}
