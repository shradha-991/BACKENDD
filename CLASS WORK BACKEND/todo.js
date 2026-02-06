const fs=require("fs");

const readTodo=function(){
    const data=fs.readFileSync("./todo.json","utf-8");
    const objData=JSON.parse(data);
    console.log(objData);
    return objData;
}

const writeTodo=function(todos){
    fs.writeFileSync("./todo.json", JSON.stringify(todos));
}

function addTodo(task){
    const currentTodos = readTodo();
    const newTodo={
        task:task,
        id:Date.now(),
        status:"false"
    }
    currentTodos.push(newTodo);
    writeTodo(currentTodos);
}

addTodo("say hy to me");