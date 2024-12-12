let tasks = [];

function addTask() {
    const task = document.getElementById("taskInput").value;
    if (task) {
        tasks.push({ task });
        document.getElementById("taskInput").value = '';
    } else {
        alert("Task field cannot be empty!");
    }
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((item, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        taskDiv.innerHTML = `
            <p>${item.task}</p>
            <div class="buttons">
                <button onclick="deleteTask(${index})" class="delete">Delete</button>
                <button onclick="editTask(${index})">Edit</button>
            </div>
        `;

        taskList.appendChild(taskDiv);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    const newTask = prompt("Edit your task", tasks[index].task);
    if (newTask) {
        tasks[index].task = newTask;
    } else {
        alert("Task cannot be empty!");
    }
    displayTasks();
}