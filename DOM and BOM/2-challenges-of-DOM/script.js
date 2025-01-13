//example-1-->grab the element 
let hold = document.getElementById("changeTextButton");
console.log(hold);
hold.addEventListener('click',function(){
    console.log(this);
})
let para = document.getElementById("paragraph");
console.log(para);
console.log(para.textContent);
hold.addEventListener('click',function(){
    para.textContent="Now I am changed my friend";
})

// example-2
let button = document.getElementById("highlightFirstCity");
button.addEventListener('click',function(){
    let firstCity = document.getElementById("citiesList").firstElementChild;
    console.log(firstCity.classList.toggle("highlight"))
})

//example-3
let changeOrder = document.getElementById("changeOrder");
changeOrder.addEventListener('click',function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor="Green";
    coffeeType.style.color="#fff"
    coffeeType.style.padding = "4px"
})

//example-4
let addNewItem = document.getElementById("addNewItem");
addNewItem.addEventListener("click",function(){
    //Creating elements using document 
    let newItem = document.createElement('li');
    newItem.textContent = 'Bread';
    let newItem2 = document.createElement('li');
    newItem2.textContent='Butter'
    let shoppingList = document.getElementById("shoppingList");
    shoppingList.appendChild(newItem);
    shoppingList.appendChild(newItem2)
})

// example-5
let removeLastTask = document.getElementById("removeLastTask");
removeLastTask.addEventListener("click",function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
})