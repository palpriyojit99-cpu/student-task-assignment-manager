const taskForm = document.getElementById("taskForm");

const titleInput = document.getElementById("taskTitleInput");
const subjectInput = document.getElementById("taskSubjectInput");
const descriptionInput = document.getElementById("taskDescriptionInput");
const dueDateInput = document.getElementById("taskDueDateInput");
const priorityInput = document.getElementById("taskPriorityInput");

const token = localStorage.getItem("authToken");
const editTaskId = localStorage.getItem("editTaskId");

let existingTask = null;


// Check login
if (!token) {
    window.location.href = "login.html";
}


// Load existing task when editing
async function loadTaskForEdit() {

    if (!editTaskId) {
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:3000/api/tasks/${editTaskId}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            throw new Error("Unable to load task");
        }

        existingTask = await response.json();

        titleInput.value = existingTask.title;
        subjectInput.value = existingTask.subject;
        descriptionInput.value = existingTask.description;
        dueDateInput.value = existingTask.dueDate;
        priorityInput.value = existingTask.priority;

    } catch (error) {

        console.error("Edit load error:", error);
        alert("Unable to load task.");
    }
}


// Create or update task
taskForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const taskData = {
        title: titleInput.value.trim(),
        subject: subjectInput.value.trim(),
        description: descriptionInput.value.trim(),
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        status: existingTask ? existingTask.status : "Pending"
    };

    try {

        let response;

        // UPDATE existing task
        if (editTaskId) {

            response = await fetch(
                `http://localhost:3000/api/tasks/${editTaskId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(taskData)
                }
            );

        }

        // CREATE new task
        else {

            response = await fetch(
                "http://localhost:3000/api/tasks",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(taskData)
                }
            );
        }

        if (!response.ok) {

            const errorData = await response.json();

            throw new Error(
                errorData.error || "Unable to save task"
            );
        }

        // Clear edit information
        localStorage.removeItem("editTaskId");

        alert(
            editTaskId
                ? "Task updated successfully!"
                : "Task created successfully!"
        );

        window.location.href = "dashboard.html";

    } catch (error) {

        console.error("Save task error:", error);

        alert(error.message);
    }
});


// Load edit data
loadTaskForEdit();
