function Person(name,age){
    this.name = name;
    this.age = age;
}

function Car(make,model){
    //this refers to newly created object.
    this.make = make;
    this.model = model;
}

function tea(type){
    this.type = type;
    this.describe = ()=>`This is a cup  of ${this.type}`
}
let myCar = new Car("Toyota","Canry");
console.log(myCar);

let myNewCar = new Car("Tata","Safari");
console.log(myNewCar);

let lemonTea = new tea("Lemon Tea");
console.log(lemonTea.describe())

function Animal(species){
    this.species =species;
}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}
let dog = new Animal("Dog");
console.log(dog.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");

    }
    this.name = name;
}
let teass = new Drink("tea");
console.log(teass)
// let coffee = Drink("coffee"); Throws an error
// console.log(coffee);