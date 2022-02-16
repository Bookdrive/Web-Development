const todoList = document.querySelector(".todo-list")
console.log(todoList.innerHTML);

// todoList.innerHTML = "<li>New Todo</li>";
todoList.innerHTML += "<li>New Todo</li>";
todoList.innerHTML += "<li>lorem 2</li>";