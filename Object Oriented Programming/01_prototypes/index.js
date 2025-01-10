//Behind the scenes,Javascript is prototype-based language.
//Prototype means extra functionality or properties that are provided in any data-type 
let computer = {cpu:12,RAM:"16GB"};
let lenovo = {screen:"HD",
    __proto__:computer
};
let tomHardware = {};

//Accessing prototype of any data type
console.log(computer,'computer',computer.__proto__);
console.log(lenovo,'lenovo',lenovo.__proto__);

let genericCars = {
    tyres:4
}
let tesla = {
    driver:"AI"
}
Object.setPrototypeOf(tesla,genericCars);

console.log(tesla);
console.log(Object.getPrototypeOf(tesla));