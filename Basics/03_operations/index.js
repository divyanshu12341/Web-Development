let score = 102;
let bonus = 45;
let totalScore = score+bonus;

let addition = 4+5;
let subtract = 3-9;
let mult = 4*5;
let divi = 8/2;
let remainder = 9%2;
let expo = 2 ** 4;
//Increment the value of variable
let myScore = 210;
myScore++; //myScore = myScore+1

//Decrement the value of variable
let credits = 56;
credits--;

//Comparison operations 
let num1 = 3;
let num2 = 3;
let num3 = 6;

//Result is boolean that is either true or false
//Equals to operator(==)
console.log(num1==num2);

//Not equals to operator(!=)
console.log(num1!=num2);

console.log(num1>num3);
console.log(num1>=num3);
console.log(num2<3);
console.log(num2<=num3);

//Logical operators 
//&& -->AND
// || -->OR
// ! -->REVERSE

let isLoggedIn = true;
let ispaid = false;

if(isLoggedIn && ispaid){
    console.log("You can buy a course")
}
else{
    console.log("No you can't purchase a course")
}

let isEmailUser = true;
let isGmailUser = false;
console.log(isEmailUser||isGmailUser)
if(isEmailUser||isGmailUser){
    console.log("Valid email");
}
else{
    console.log("Invalid email");
}

//Assignment operation 
let scores = 10+11;
let num4 = 10;
let num5 = 40;
num4 += 5;
console.log(num4);

num5 /= 5;
console.log(num5);

//Ope-predence 
//Always use parenthesis 
let score2 = (((2*3)+2)-1);