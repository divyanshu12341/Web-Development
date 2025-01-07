//Non-primitives in javascript 
let obj = {};
console.log(obj);
console.log(typeof obj);

const username = {
    firstName:'Divyanshu',
    lastName:'Jain',
    isLoggedIn:true
}
console.log(username);
//Defining above object as constant means that memory space will not change but we can change individual value of an object.
username.firstName = "Divyansh";
username.lastName = "Sharma";
console.log(username);

//We cannot access variable using dot notation having spaces so we can use square notation for accessing variable
const userName1 = {
    "first name":"Divyanshu",
    "last name":"Jain",
    "Aren't you logged in":"yes"
}
console.log(userName1["first name"])
console.log(userName1["last name"])
console.log(userName1["Aren't you logged in"]);

let today = new Date();
console.log(today.getDate());

//Array
//Array is just a collection of things
let heros = ["Spiderman","Captain America"]
let anotherUser = ["Divyanshu","Jain",true]
//In objects there are keys to access the elements while in objects there are not keys to access the elements instead there are indexes to access the elements.
//Indexes of an array starts from zero 
console.log(anotherUser[0]);

//Javascript considers true internally as 1 and considers false internally as 0 
let isValue = true;
console.log(isValue+true);

let isValue2 = "2abc"
console.log(Number(isValue2));
console.log(typeof NaN);
//typeof NaN is a number 
//NaN is termed as Not a number
console.log(Number(null))
console.log(Number(undefined))