// Get the task form
const taskForm = document.getElementById("taskForm");

// Run this code only if the form exists
if (taskForm) {

    taskForm.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get values from the form
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

        // Get existing tasks
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Add the new task
        tasks.push(newTask);

        // Save tasks
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Go to dashboard
        window.location.href = "dashboard.html";
    });
}
