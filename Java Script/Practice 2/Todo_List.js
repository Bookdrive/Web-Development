const todoListOfUser = [];

let printLists = function () {
    console.log("___________________________________");
    for (let list in todoListOfUser) {
        console.log(`${list}: ${todoListOfUser[list]}`);
    }
    console.log("___________________________________");
}

let addATodo = function () {
    let newTodo = prompt("What would You Like To Add!");
    todoListOfUser.push(newTodo);
    printLists();
}

let deleteTodoItem = function () {
    let todoListOfUserSize = todoListOfUser.length;
    if (todoListOfUserSize == 0) return;
    let deleteTodo = NaN;
    while (Number.isNaN(deleteTodo) || deleteTodo < 0 || deleteTodo >= todoListOfUserSize) {
        deleteTodo = parseInt(prompt("Enter The Entry You Want To Delete!"));
    }
    todoListOfUser.splice(deleteTodo, 1);
    console.log("Item Remove Successfuly");
    printLists();
}

do {
    let optionForTodo = prompt("What Would You Like To Do");
    if (optionForTodo === "new")
        addATodo();
    else if (optionForTodo === "list")
        printLists();
    else if (optionForTodo === "delete")
        deleteTodoItem();
    else if (optionForTodo === "quit") break;
} while (true);
console.log("Exited...");