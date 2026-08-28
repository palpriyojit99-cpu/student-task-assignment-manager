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


// Get search box

const searchTask = document.getElementById("searchTask");


// Get filter buttons

const showAll = document.getElementById("showAll");
const showPending = document.getElementById("showPending");
const showCompleted = document.getElementById("showCompleted");


// Get saved tasks from localStorage

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Current filter

let currentFilter = "All";


// Display tasks

function displayTasks() {

    taskList.innerHTML = "";

    const searchText = searchTask.value.toLowerCase();

    const filteredTasks = tasks.filter(function (task) {

        const matchesFilter =
            currentFilter === "All" ||
            task.status === currentFilter;

        const matchesSearch =
            task.title.toLowerCase().includes(searchText) ||
            task.subject.toLowerCase().includes(searchText);

        return matchesFilter && matchesSearch;

    });


    if (filteredTasks.length === 0) {

        taskList.innerHTML = "<p>No matching tasks found.</p>";

        return;
    }


    filteredTasks.forEach(function (task) {

        const taskIndex = tasks.indexOf(task);

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

            <button onclick="viewTask(${taskIndex})">
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


// Show all tasks

showAll.addEventListener("click", function () {

    currentFilter = "All";

    displayTasks();

});


// Show pending tasks

showPending.addEventListener("click", function () {

    currentFilter = "Pending";

    displayTasks();

});


// Show completed tasks

showCompleted.addEventListener("click", function () {

    currentFilter = "Completed";

    displayTasks();

});


// Search tasks

searchTask.addEventListener("input", function () {

    displayTasks();

});


// Run functions

displayTasks();

updateStatistics();
