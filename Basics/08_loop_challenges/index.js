// 2)Write a while loop that counts down from 5 to 1 and stores the numbers in an array named countdown 
let countdown = []
let j = 5
while(j>=0){
    countdown.push(j);
    j--;
}
console.log(countdown)

// 3) Write a do-while loop that prompts user to enter their favourate tea type until they enter "stop".Store each tea type in an array named "teaCollection".
// let teaCollection = []
// let tea = "abc"
// do {
//    tea =   prompt(`Enter your favourate tea (type STOP to finish)`);
//    if(tea !=='STOP')
//      teaCollection.push(tea)
// }while(tea!=='STOP')


//4)Write a do while loop that adds numbers from 1 to 3
let total = 0;
let num = 1;
do{
    total = total + num;
    num = num+1;

}while(num<=3)
console.log(total)

//5)Write a for loop that multiplies each element in the array[2,4,6] by 2 and stores results in the new array named as multipliedNumbers 
let arrayNum = [2,4,6]
let multipliedNum = []
for(let i = 0;i<=arrayNum.length-1;i++){
    multipliedNum[i] = arrayNum[i]*2
}
console.log(multipliedNum)

//6)Write a for loop that lists all the cities in the array named as "Paris","New York","Tokyo","London" and stores each city in the new array named as cityList
let cities = ["Paris","New York","Tokyo","London"]
let cityList = []
for(let i = 0;i<cities.length;i++){
    cityList[i] = cities[i];
}
console.log(cityList);