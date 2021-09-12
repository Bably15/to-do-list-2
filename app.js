const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", (e) => {
    e.preventDefault();

    // todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement("button");
    completedButton.innerText = "check";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check trash button
    const trashButton = document.createElement("button");
    trashButton.innerText = "undo";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append child
    todoList.appendChild(todoDiv);
});
