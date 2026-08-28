// Get the task form
const taskForm = document.getElementById("taskForm");

// Check whether we are editing an existing task
const editTaskIndex = localStorage.getItem("editTaskIndex");

// Get the form fields
const titleInput = document.getElementById("taskTitleInput");
const subjectInput = document.getElementById("taskSubjectInput");
const descriptionInput = document.getElementById("taskDescriptionInput");
const dueDateInput = document.getElementById("taskDueDateInput");
const priorityInput = document.getElementById("taskPriorityInput");


// If editing a task, load its existing information
if (editTaskIndex !== null) {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks[editTaskIndex];

    if (task) {

        titleInput.value = task.title;
        subjectInput.value = task.subject;
        descriptionInput.value = task.description;
        dueDateInput.value = task.dueDate;
        priorityInput.value = task.priority;

    }
}


// Save or update task
taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let taskStatus = "Pending";

if (editTaskIndex !== null && tasks[editTaskIndex]) {
    taskStatus = tasks[editTaskIndex].status;
}

const taskData = {
    title: titleInput.value,
    subject: subjectInput.value,
    description: descriptionInput.value,
    dueDate: dueDateInput.value,
    priority: priorityInput.value,
    status: taskStatus
};


    // Update existing task
    if (editTaskIndex !== null) {

        tasks[editTaskIndex] = taskData;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        localStorage.removeItem("editTaskIndex");

    }

    // Create a new task
    else {

        tasks.push(taskData);

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }


    // Return to dashboard
    window.location.href = "dashboard.html";

});
