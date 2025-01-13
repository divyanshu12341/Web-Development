//Objects are instances of classes
let car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
    start:function (){ return`${this.make} car get started in ${this.year}`
}
}
console.log(car.start());

class Vehicle {
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    start(){
         return `${this.model} is a car from ${this.make}`;
    }
}
class Car extends Vehicle{
    drive(){
        return `${this.make}:This is an inheritance example`;
    }
}
let myCar = new Car("Tata","Toyota");
console.log(myCar.start())
console.log(myCar.drive())

//Encapsulation 

class bankAccount{
    //If we put '#' before the variable then we need to use custom variable to access it
    //Encapsulation used for protection of data.It is not accessible outside the class
    #balance = 0;

    deposit(amount){
        this.#balance += amount 
        return this.#balance
    }
    getBalance(){
        return `${this.#balance}`;
    }
}
let account = new bankAccount()
//Balance is not accessible outside the class 
console.log(account.balance);

//Abstraction 
//Used to hide  complex details

 class coffeeMachine  {
    start(){
    let msg1 =  `Starting the machine`;
    return msg1;
    }
    brewCoffee(){
        //Complex calculation
      let msg2 =  `Brewing coffee`;
      return msg2;
    }
    pressStart(){
        return `${this.start()} + ${this.brewCoffee()}`;
    }
}
//Creating object
let myMachine = new coffeeMachine();
// console.log(myMachine.start());
console.log(myMachine.pressStart());

//Polymorphism 
//Ability to use one method in multiple forms 

class Bird{
    fly(){
        return `Flying`;
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly ...`;
    }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//Static keyword
//Special method which can be called by class itself.Anyone other cannot call it 
class Calculator{
    static add(a,b){
        return a+b;
    }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3)); error as static function can only be accessed by the class itself not the object

console.log(Calculator.add(2,7));

//Getters and Setters

class Employees {
    #salary;
    constructor(name,salary){
        if(salary<0){
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary(){
        return `You aren not allowed to see salary`
    }
    set salary(value){
        if(value<0){
            console.error("Invalid salary");
        }
        else {
            this.salary = value;
        }

    }

}
let emp = new Employees("Divyanshu",200);
console.log(emp.salary)