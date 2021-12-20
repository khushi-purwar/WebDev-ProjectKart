const getRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 55) + 200}, ${
    Math.floor(Math.random() * 55) + 200
  }, ${Math.floor(Math.random() * 55) + 200})`;
};

const InputTask = document.getElementById("newTodoInput");
const newTodoNode = (todo) => {
  const li = document.createElement("li");
  li.innerHTML = `<div>${todo}</div><div></div><div onclick="this.parentNode.remove()">x</div>`;
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.cursor = "pointer";
  li.className = "todoList";
  return li;
};

const addTask = () => {
  const container = document.getElementById("allTodos");
  if (InputTask.value != "")
    container.appendChild(newTodoNode(InputTask.value));
  InputTask.value = "";
};

InputTask.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});
