//Printing to console
console.log("Hello!")
//It is also way of printing but it doesn't give new line
process.stdout.write("Divyanshu")
process.stdout.write("Jain")
console.table({city:'Jaipur',state:'Rajathan'});

//Data types
/*
        Data-types:
        1)strings 
        2)Numbers -- 1,2,3,..
        3)Boolean-- True or False
        4)bigint -- It is used for scientific big calculations
        5)undefined
        6)NULL
        7)OBJECTS
        8)SYMBOL
        
*/
/*
  Variable is a placeholder where we can store all the values.
*/
//difference is scope of var and let are different.
//1)Number
// var score = 102;
let score = 102;

//2)Strings
let name = "Divyanshu Jain"

//3)Boolean
let isLoggedIn = true;

//4)array that is object as well
let teaType = ['orange tea','lemon tea','oolong tea']

//5)Object
let user = {
    firstName:'Divyanshu',
    lastName:'Jain'
}

//We can copy the value of one variable from another variable.
let getScore = score;
console.log(getScore);

//We can override value of variables
let gameName = "Watch Dogs";
gameName = "Watch Dogs 2";
console.log(gameName);

//const keyword
const userName = "Divyanshu12312";
// userName = "dj" not possible as we cannot change declared value 
console.log(userName)

