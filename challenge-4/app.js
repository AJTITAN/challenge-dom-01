/**
 * Write your challenge solution here
 */
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const empty = document.getElementById("empty");
let total = 0;
let completed = 0;
function tasks() {
  if (total > 0) {
    empty.classList.add("hidden");
  }
  if (total <= 0) {
    empty.classList.remove("hidden");
  }
  totalTasks.innerText = `Total tasks: ${total}`;
  completedTasks.innerText = `Completed: ${completed}`;
}
addButton.addEventListener("click", () => {
  if (taskInput.value.trim()) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    const para = document.createElement("p");
    para.innerText = taskInput.value;
    para.classList.add("task-text");
    const opt = document.createElement("input");
    opt.setAttribute("type", "checkbox");
    opt.classList.add("complete-checkbox");
    opt.addEventListener("click", () => {
      if (opt.checked === true) {
        li.classList.add("completed");
        completed++;
      } else {
        li.classList.remove("completed");
        completed = Math.max(0, completed - 1);
      }
      tasks();
    });
    const but = document.createElement("button");
    but.classList.add("delete-button");
    but.innerText = "Delete";
    but.addEventListener("click", () => {
      if (opt.checked) {
        completed = Math.max(0, completed - 1);
      }
      taskList.removeChild(li);
      total--;
      tasks();
    });
    li.appendChild(opt);
    li.appendChild(para);
    li.appendChild(but);
    taskList.appendChild(li);
    taskInput.value = "";
    total++;
    tasks();
  }
});
