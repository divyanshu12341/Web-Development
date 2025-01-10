/* Write a function named 'processTeaOrder' that takes another function 'makeTea' as a parameter and calls it with argument earlGray.
return the result of calling makeTea */

function makeTea(typeOfTeas){
    return `makeTea:${typeOfTeas}`
}
function processTeaOrder(teaFunc){
    return teaFunc("earl gray")
}
let teaAns = processTeaOrder(makeTea);
console.log(teaAns);

/* Write a function named createTeaMaker that returns another function.The returned function should take one parameter 'teaType' and return a message like 'making green tea'.
Store the returned function in a variable named 'teaMaker' and call it with 'greenTea'  
*/
function createTeaMaker(){
    //All the inner function has access to outside variables 
    return function(teaType){
        return `Making ${teaType}`;
    }
}
let teaMakers = createTeaMaker();
console.log(teaMakers("greenTea"))