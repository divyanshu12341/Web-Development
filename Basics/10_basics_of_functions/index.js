// 1)Write a function named "Make tea" that takes one parameter "type of tea" and returns a string like "making green tea" when called with "green tea".
//Store the variable named 'teaOrder'
 
let makeTea = (typeOfTea) =>{
    let teaOrder =  `making ${typeOfTea}`;
    return teaOrder;
}
let teaNeeded = makeTea("Lemon tea");
console.log(teaNeeded);

// 2)Create a function named 'orderTea' that takes one parameter,'teaType'.Inside this function,create another function named 'confirmOrder' that returns a message like 'Order confirmed for chai'.
//Call 'confirmOrder' from within 'orderTea' and return the result.
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai ${teaType}`;
    }
    console.log(confirmOrder());
    //If i do not write return then it will return undefined as it does not have an implicit return statement.
    return;
}
orderTea("Lemon Tea");

//3)Write an arrow function named as calculateTotal that takes two parameters:price and quantity..The function should return total cost by multiplying price and quantity.Store result in a variable named totalCost
let calculateTotal = (price,quantity) => price*quantity;
console.log(calculateTotal(10,20));