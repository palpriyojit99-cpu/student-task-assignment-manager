// Landing page - Add New Task button

const addTaskButton = document.getElementById("addTaskButton");

if (addTaskButton) {

    addTaskButton.addEventListener("click", function () {

        window.location.href = "add-task.html";

    });

}
