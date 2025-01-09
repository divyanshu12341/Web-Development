// 1)Write a for loop that loops through the array ["green tea","black tea","chai","oolong tea"] and stops the loop when it finds 'chai'.Store all the teas before chai on the array named 'selectedTeas'
let teas = ["green tea","black tea","chai","oolong tea"];
let selectedTeas = [];
for(let i=0;i<teas.length;i++){
    if(teas[i]==="chai"){
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log("1 :",selectedTeas);

//2)Write a for loop that loops through the array ["London","New York","Paris","Berlin"] and skips "Paris".Store the other cities in a new array named "VisitedCities"

let cities = ["London","New York","Paris","Berlin"];
let visitedCities = [];
for(let i=0;i<cities.length;i++){
    if(cities[i]=='Paris'){
        continue;
    }
    visitedCities.push(cities[i]);
}
console.log("2: ",visitedCities)

//3)Use the for-of loop to iterate through the array [1,2,3,4,5] and stops when number 4 is found.Store the numbers before '4' in an array named smallNumbers
let numbers = [1,2,3,4,5];
let smallNumbers= [];
for (const num of numbers) {
    if(num==4) break;
    smallNumbers.push(num);
}
console.log("3: ",smallNumbers)

//4)Use for-of loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip "Herbal Tea"

let neededTea = ["chai","green tea","herbal tea","black tea"];
let preferredTea = [];
for(const tea of neededTea){
    if(tea==="herbal tea") continue;
    preferredTea.push(tea);
}
console.log("4: ",preferredTea)

//5)Use the 'for-in' loop to loop through the object containing city populations.
//  Stop the population when population of "Berlin" is found and store all previous cities population in a new object named as "city populations".
//let cities populations = {
// "London":8900000
//"New York":8400000,
//"Paris":2200000,
//"berlin":3500000
let populationOfAllCities = {
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000
}

let populationOfSelectedCities = {};
for(const items in populationOfAllCities){
    if(items ==="Berlin") break;
    populationOfSelectedCities[items] = populationOfAllCities[items];
}
console.log("5: ",populationOfSelectedCities)

//6)Use a for-in loop to loop through an object containing city populations.Skip any city with a population below 3 million and store the rest in a new object named as 'large cities'
//Skip any city with population below 3 million and store the rest in a new object named 'largeCities'
//let worldCities = {
//  "Sydney":5000000,
//  "tokyo":9000000,
// "Berlin":3500000,
// "Paris":2200000
//}
 let worldCities = {
    "Sydney":5000000,
    "tokyo":9000000,
    "Berlin":3500000,
    "Paris":2200000
 }
 let smallerCities = {}
for(let city in worldCities){
    if(worldCities[city]<3000000){
        smallerCities[city] = worldCities[city]; 
    }
}
console.log(smallerCities);

//7)Write a 'for-each' loop that iterates through the array ["earl grey","green tea","chai","oolong tea"].Stop the loop when chai is found and store all previous tea types in an array named 'availableTeas'
let teaName = ["earl grey","green tea","chai","oolon tea"];
let availabeTeaName = [];
teaName.forEach(tea=>{
    if(tea==="chai") return;
    availabeTeaName.push(tea);
})
console.log("7: ",availabeTeaName);

//Write a for-each loop that iterates through the array ["Berlin","Tokyo","Sydney","Paris"].Skip sydney and store other cities in an array named as 'travelCities'
let worldsCities = ["Berlin","Tokyo","Sydney","Paris"];
let travelledCities = [];
worldsCities.forEach(city=>{
    if(city==="Sydney"){
        return;
    }
    travelledCities.push(city);
})
console.log("8 :",travelledCities);

//9)Write a for loop that iterates through the array [2,5,7,9].Skip the value 7 and multiply the rest by 2.Store the results in a new array named "doubled numbers"
let number1 = [2,5,7,9];
let doubledNumbers = [];

for(let i=0;i<number1.length;i++){
    if(number1[i]==7){
        continue;
    }
    // else{
    // doubledNumbers[i] = number1[i]*2;
    // }
    doubledNumbers.push(number1[i]);
}

console.log("9 ",doubledNumbers);