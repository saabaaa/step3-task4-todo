//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//event listener
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deletecheck);
filterOption.addEventListener("click", filterTodo);

//function
function addTodo(event) {
    event.preventDefault();
    if (todoInput.value == "") {
        alert("please add Some Text");
      } else {
    //creat todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creat li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark btn
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash btn
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //check edit btn
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = "";
    todoInput.focus();
      }
}

function deletecheck(event) {
    const item = event.target; 
    //delete item
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    //check item 
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    //edit item 
    
    if (item.classList[0] === "edit-btn"){
        const edit = item.parentElement
       if ( edit.contentEditable === "true"){
        edit.contentEditable = "false";
       }else {
            edit.contentEditable = "true";
       }
    }
}

function filterTodo(event){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                   todo.style.display = "flex"; 
                }else{
                    todo.style.display = "none";
                }
                break;
            case "active":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"; 
                }else{
                    todo.style.display = "none";
                }  
                break;    
        }
    });
}