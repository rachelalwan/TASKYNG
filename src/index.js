let taskBtn = document.querySelector(".add-btn");
taskBtn.addEventListener("click", addTask);

let clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearTasks);

loadTasks();

function loadTasks() {
  let tasks = localStorage.getItem("tasks");
  if (tasks !== null) {
    tasks = JSON.parse(tasks);
    let nTasks = Object.keys(tasks).length;
    for (let i = 0; i < nTasks; i++) {
      let task = createTask(tasks[i].task, i);
      checkIfFinished(task);
    }
  }
}

function createTask(input, id) {
  let task = document.createElement("li");
  task.classList.add("task");
  task.id = id;
  let checks = document.createElement("input");
  checks.type = "checkbox";
  checks.addEventListener("change", function() {
    if (this.checked) {
      finishTask(task);
    } else {
      unfinishTask(task);
    }
  });
  task.appendChild(checks);
  let text = document.createElement("span");
  text.textContent = input;
  task.appendChild(text);
  let taskList = document.querySelector("#task-section ol");
  taskList.appendChild(task);
  return task;
}

function addTask() {
  let taskInput = document.querySelector(".task-input");
  let input = taskInput.value;
  if (input !== "") {
    taskInput.value = "";
    let list = document.querySelectorAll("ol .task");
    createTask(input, list.length);
    saveTask(input);
  }
}

function saveTask(input) {
  let tasks = localStorage.getItem("tasks");
  if (tasks !== null && tasks.length > 0) {
    tasks = JSON.parse(tasks);
  } else {
    tasks = [];
  }
  input = { "task": input, "status": "unfinished" };
  tasks.push(input);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function finishTask(task) {
  task.classList.add("finished");
  changeStatus(task, "finished");
}

function unfinishTask(task) {
  task.classList.remove("finished");
  changeStatus(task, "unfinished")
}

function changeStatus(task, status) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks[parseInt(task.id)].status = status;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function checkIfFinished(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let status = tasks[parseInt(task.id)].status;
  if (status === "finished") {
    task.classList.add("finished");
    task.firstElementChild.checked = "true;"
  }
  task.classList.remove("unfinished");
}

function clearTasks() {
  let list = document.querySelector("ol");
  list.innerHTML = "";
  localStorage.removeItem("tasks");
}