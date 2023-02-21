function addTodos() {
  var todo = document.getElementById("todo").value;
  if (todo) {
    var todoStore = JSON.parse(localStorage.getItem("todos")) || [];
    todoStore.push(todo);
    localStorage.setItem("todos", JSON.stringify(todoStore));
    document.getElementById("todo").value = "";

    cs(); // calling cs() to display new added todos
    alert("To Dos added");
  } else {
    alert("Please Enter Todos and Date");
  }
}

function cs() {
  var divFromHtml = document.getElementById("displayTodos");

  var gettingTodosFromLS = JSON.parse(localStorage.getItem("todos"));
  // console.log(gettingTodosFromLS, "gettingTodos");
  // var finalStructure = [`<div id="header"><p>Todos</p><p>Completed</p></div>`];

  var finalStructure = [`<div id="header"><p>To-do-list</p><p>Planes</p></div>`];

  for (var i = 0; i < gettingTodosFromLS.length; i++) {
    finalStructure += `<div id="row">
        <p>${gettingTodosFromLS[i]}</p>
        <i class="fa-solid fa-trash-can" onclick="deleteToDo(${i})"></i>
        </div> `; //passing structure into the array
  }
  divFromHtml.innerHTML = finalStructure;
}

cs(); //call the function to display todos without adding button element

function deleteToDo(todoIndex) {
  var ToDosFromLs = JSON.parse(localStorage.getItem("todos"));
  
  ToDosFromLs.splice(todoIndex, 1);
  
  localStorage.setItem("todos", JSON.stringify(ToDosFromLs));
  cs();
}
