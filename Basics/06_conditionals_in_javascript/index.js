//Check if one number is greater than another number
let num1 = 5;
let num2 = 8;
if(num1>num2){
    console.log("num1 is greater")
}
else{
    console.log("num2 is greater");
}

//Check username is equal or not
let username = "Divyanshu"
let anotherUserName = "Divyanshu"
if(username == anotherUserName){
    console.log(anotherUserName)
}
else{
    console.log("Both are not equal my friend")
}

//Checking if variable is number or not 
let score = 44;
if(typeof(score) ==='number'){
    console.log("It's type is number")
} else{
    console.log("It's type is not a number");
}

let score1 = [44,'aaa'];
if(typeof score1 ==='number'){
    console.log("It is a number")
} else{
    console.log("It is not a number")
}

let isTeaReady = true;
if(isTeaReady){
    console.log("Tea is ready")
} else{
    console.log("Tea is not ready");
}

//Checking if an array is empty or not
let items = [];
if(items.length){
    console.log("Array size is not 0")
} else{
    console.log("Array is empty");
}