
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === '') {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="remove-task" onclick="removeTask(event)">✖</span>
        `;
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("task-text")) {
        target.classList.toggle("completed");
        saveData();
    }
}, false);

function removeTask(event) {
    const li = event.target.parentElement;
    listContainer.removeChild(li);
    saveData();
}

function clearCompletedTasks() {
    const completedTasks = document.getElementsByClassName("completed");
    while (completedTasks.length > 0) {
        listContainer.removeChild(completedTasks[0].parentElement);
    }
    saveData();
}

function saveData() {
    localStorage.setItem("todoList", listContainer.innerHTML);
}

function showTasks() {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
        listContainer.innerHTML = savedList;
    }
}

showTasks();