window.addEventListener("load", () => {
  const input = document.querySelector("#input-new-task");
  const addTask = document.querySelector("#add-new-task");
  const listTasks = document.querySelector(".tasks");

  //add a task

  addTask.addEventListener("click", addEvent);

  function addEvent(e) {
    e.preventDefault();

    const newTask = input.value;

    if (newTask == "") {
      alert("please enter a task!");
    } else {
      //creer une div avec le nom de la classe "task"
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");

      //ceer une div avec le nom de la classe "content" qui soit child of task
      const taskContent = document.createElement("div");
      taskContent.classList.add("content");
      taskElement.appendChild(taskContent);

      //creer un input avec le nom de la classe "txt" et qui soit child of content

      const taskInput = document.createElement("input");
      taskInput.classList.add("txt");
      taskInput.type = "text";
      taskInput.value = newTask;
      taskInput.setAttribute("readonly", "readonly");
      taskContent.appendChild(taskInput);

      //creer une div pour les options qui porte le nom de la classe "options"

      const optionsElement = document.createElement("div");
      optionsElement.classList.add("options");
      taskElement.appendChild(optionsElement);

      //create the buttom EDIT

      const taskEdit = document.createElement("button");
      taskEdit.classList.add("edit");
      taskEdit.innerText = "Edit";
      optionsElement.appendChild(taskEdit);
      //creat the buttom delete

      const taskDel = document.createElement("button");
      taskDel.classList.add("delete");
      taskDel.innerText = "Delete";
      optionsElement.appendChild(taskDel);
      //create the buttom Done

      const taskDone = document.createElement("button");
      taskDone.classList.add("done");
      taskDone.innerText = "Done";
      optionsElement.appendChild(taskDone);

      listTasks.appendChild(taskElement);

      input.value = "";

      //edit a task
      taskEdit.addEventListener("click", editTask);

      function editTask() {
        if (taskEdit.innerText.toLocaleLowerCase() == "edit") {
          taskEdit.innerText = "Save";
          taskInput.removeAttribute("readonly");
          taskInput.focus();
        } else {
          taskEdit.innerText = "Edit";
          taskInput.setAttribute("readonly", "readonly");
        }
      }

      //delete a task

      taskDel.addEventListener("click", delTask);

      function delTask() {
        listTasks.removeChild(taskElement);
      }

      //task done
      taskDone.addEventListener("click", doneTask);

      function doneTask() {
        taskInput.style.textDecoration = "line-through";
        taskInput.style.color = "#3F4A3C";
      }
    }
  }
});
