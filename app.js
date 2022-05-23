window.addEventListener("load", () => {
  // Declare Variable
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const listEl = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    // Mencegah reload saat "add task"
    e.preventDefault();

    const task = input.value;

    // masukan element kedalah HTML dan menambhankan element ke variabel lain nya
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    taskEl.appendChild(taskContent);

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");

    taskContent.appendChild(taskInput);

    const taskAction = document.createElement("div");
    taskAction.classList.add("action");

    const taskEditBtn = document.createElement("button");
    taskEditBtn.classList.add("edit");
    taskEditBtn.innerText = "Edit";

    const taskDelBtn = document.createElement("button");
    taskDelBtn.classList.add("delete");
    taskDelBtn.innerText = "Delete";

    taskAction.appendChild(taskEditBtn);
    taskAction.appendChild(taskDelBtn);

    taskEl.appendChild(taskAction);

    listEl.appendChild(taskEl);

    input.value = "";

    taskEditBtn.addEventListener("click", (e) => {
      if (taskEditBtn.innerText.toLowerCase() == "edit") {
        taskEditBtn.innerText = "Save";
        taskInput.removeAttribute("readonly");
        taskInput.focus();
      } else {
        taskEditBtn.innerText = "Edit";
        taskInput.setAttribute("readonly", "readonly");
      }
    });

    taskDelBtn.addEventListener("click", (e) => {
      listEl.removeChild(taskEl);
    });
  });
});
