let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let taskContainer = document.createElement("div");
    taskContainer.style.margin = "8px 0";

    let li = document.createElement("li");
    li.style.display = "inline-block";
    li.style.marginRight = "10px";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let textNode = document.createTextNode(" " + taskText);
    li.appendChild(checkbox);
    li.appendChild(textNode);

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginRight = "5px";
    editBtn.addEventListener("click", function () {
      let newText = prompt("New text", taskText);
      if (newText !== null && newText.trim() !== "") {
        textNode.textContent = " " + newText;
        taskText = newText;
      }
    });

    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(taskContainer);
    });

    taskContainer.appendChild(li);
    taskContainer.appendChild(editBtn);
    taskContainer.appendChild(deleteBtn);

    taskList.appendChild(taskContainer);

    taskInput.value = "";
  }
});
