
const newLocal = 999
let firstValue=Math.floor(Math.random()*newLocal)
let secondValue=Math.floor(Math.random()*newLocal)
let thirdValue=Math.floor(Math.random()*newLocal)

let maxValue
if(firstValue>secondValue && firstValue>thirdValue) 
maxValue=firstValue
else if(secondValue>thirdValue && secondValue>firstValue)
maxValue=secondValue
else
maxValue = thirdValue
console.log(maxValue,firstValue,secondValue,thirdValue);

// program that takes day and month from command line 

const month = "march"
const day = 15
if (month == "march" || month == "april"|| month == "june"|| month == "may" ){
if(month == "march" && day<20 ){
    console.log(false);
}
else if (month == "june" && day>20){
    console.log(false);
}
else{
    console.log(true);
} 
}
else
console.log(false);

//program to find if the year is leap year or not
// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = 2015;

checkLeapYear(year)

// A program to simulate a coin flip to print heads or tails
const coinFlip=Math.floor(Math.random()*2)
if(coinFlip<1)
console.log("head");
else console.log("tail");