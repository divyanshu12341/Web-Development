//Primitive data types in javascript 
//1)string                  4)null
//2)Boolean                 5)undefined
//3)Number                  6)Symbol

//Non primitive data types in javascript 
//1)objects                      2)arrays
//3) functions                   

//1)Numbers
let balance = 120;
let anotherBalance = new Number(1);
console.log(balance);
console.log(anotherBalance);
console.log(typeof(balance))
console.log(typeof(anotherBalance))

//Boolean
let isActive = true;
let isReallyActive = new Boolean(true); //Not recommended
console.log(typeof(isActive))
console.log(isActive)
console.log(isReallyActive);
console.log(typeof(isReallyActive))

//Null and undefined
let firstname;
//Value exist at that memory location but does not know value at that memory location exist
console.log(firstname);

let firstName = null;
console.log(firstName);

//String
let myString = "Hello"
let myString1 = "Hola";
let username = "Divyanshu"
let oldGreet = myString + " Jain"
let greetMessage = `Hello ${username} !`;
let demo1 = `Value is ${2*2}`;
console.log(greetMessage,demo1);

//Symbol
//It internally generates a unique value 
//Symbol can have own classes
let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1==sm2); 
let smDiv = Symbol("Divyanshu");
console.log(smDiv);

//Symbol property with new keyword gives an error