function addTodos(){
    var todo = document.getElementById("todo").value;
    var date = document.getElementById("date").value;

    if(todo && date){
        var todoStore = JSON.parse(localStorage.getItem('todos')) || [] ;
        todoStore.push(todo);
        localStorage.setItem('todos',JSON.stringify(todoStore));
        document.getElementById("todo").value="";

        //Date Selection
        var dateStore = JSON.parse(localStorage.getItem('date')) || [];
        dateStore.push(date);
        localStorage.setItem('date',JSON.stringify(dateStore));
    }
    else{
        alert("Please Enter Todos and Date");
    }


}

