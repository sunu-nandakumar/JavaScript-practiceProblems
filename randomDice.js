let singleDigit = Math.floor(Math.random()*10)
console.log(singleDigit);
//adding the two random values 
let diceRoll = Math.floor(Math.random()*6+1)
let secondDiceRoll = Math.floor(Math.random()*6+1)
console.log(diceRoll);
console.log(secondDiceRoll);
console.log(diceRoll+secondDiceRoll);
// program to read five random numbers to find the sum and avg
let firstValue=Math.floor(Math.random()*100)
let secondValue=Math.floor(Math.random()*100)
let thirdValue=Math.floor(Math.random()*100)
let fourthValue=Math.floor(Math.random()*100)
let fifthValue=Math.floor(Math.random()*100)

let sum = firstValue+secondDiceRoll+thirdValue+fourthValue+fifthValue
let avg = sum/5
console.log(sum,avg);
