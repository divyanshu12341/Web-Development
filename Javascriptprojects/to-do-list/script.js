document.addEventListener('DOMContentLoaded',function(){
    let todoInput = document.getElementById("todo-input");
let addTaskButton = document.getElementById("add-task-btn");
let todoList = document.getElementById("todo-list");

// let tasks = [];
let tasks = JSON.parse(localStorage.getItem("tasks"))|| [];
tasks.forEach((task)=> renderTask(task)
)
addTaskButton.addEventListener('click',function(){
    const inputValue = todoInput.value.trim();
    if(inputValue=="") return;
    const newTask = {
        id:Date.now(),
        text:inputValue,
        completed:false
    }
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = "";
    console.log(tasks)
})

function renderTask(task){
    const li = document.createElement("li");
    li.setAttribute('data-id',task.id)
    li.innerHTML = `<span>${task.text}</span>
    <button id = 'remove-task-btn'>Delete </button>
    `
    li.addEventListener('click',(e)=>{
        if(e.target.tagName ==='BUTTON') return;
        task.completed = !(task.completed);
        li.classList.toggle("completed");
        saveTasks();
    })
    li.querySelector('button').addEventListener('click',(e)=>{
        e.stopPropagation(); //prevent toggle from firing
        tasks = tasks.filter((t)=>t.id !== task.id);
            li.remove();
    })
    todoList.appendChild(li);
    saveTasks();
    console.log(task.text)
}
function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

})