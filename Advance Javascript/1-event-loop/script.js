function sayHello(){
    console.log("1-I would like to say Hello");
}
setTimeout(()=>{
    sayHello();
},5000);

console.log("chaicode");
for(let index=0;index<10;index++){
    console.log("2-"+index*2);
}

//Closures in javascript 
//Functions can retain the variables that declared outside of it.
function counter(){
    let counter = 0;
    return function(){
        //Function that is inside has access to variable that is outside.
        counter++;
        return counter;
    }
} 
let ans = counter();
console.log("3"+ans());
console.log("4"+ans());
console.log("5"+ans());

//Promises in javascript 
function fetchData(){
    //Creation of promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("6-Data fetched successfully");
            }
            else{
                reject("7-Do not able to fetch data");
            }
        },3000)
    })
}
let response = fetchData();
fetchData()
    .then((data)=> console.log(data))
    .catch((data)=>console.log(data))
console.log(response);

//Prototypal inheritance in javascript 
//Object inherits properties from another objects via prototype chain

function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){
    console.log(`8-My name is ${this.name}`);
}
let divyanshu = new Person("Divyanshu");
divyanshu.greet();

//'this' keyword and its context 
const person = {
    name:"Divyanshu",
    greet(){
        console.log(`9- Hi I am ${this.name}`)
    }
}
person.greet();
const personFunc = person.greet;
personFunc();

const boundGreet = person.greet.bind({name:"Divya"})
console.log(boundGreet())

//async,await and promise all 
function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:'chaicode',url:'divyanshuJain111@gmail.com'})
        },3000)
    })
}

async function getUserData(){
    try{
        console.log("fetching user data ...");
        const userData = await fetchUserData();
        console.log("User Data",userData);
    } catch(error){
        console.log("Error in fetching error",error);
    }
}
getUserData();

function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("post data fetched");
        },3000)
    })
}
function fetchCommentData(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("Comment data fetched successfully")
      },4000)  
    })
}

async function getBlogData(){
    try{
        console.log("Fetching blog data ...");
        const blogData = await fetchPostData();
        const commentData = await fetchCommentData();
        const [fetchPostData,fetchCommentData] = await Promise.all([fetchPostData(),fetchCommentData()]);
        console.log("Fetch complete")
    } catch(error){
        console.error("Error fetching blog data");
    }
}
getBlogData();

//Iterators and generators in javascript
//Generator function does not execute all things at once 
function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}
let gen = numberGenerator();
console.log('Generator function '+gen.next().value);
console.log('Generator function '+gen.next().value);
console.log('Generator function '+gen.next().value);

//ES6 Modules 