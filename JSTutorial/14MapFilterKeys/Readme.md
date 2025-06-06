# Maps, Filter, and Keys

1, .map - Sa .map, bumubuo tayo ng new variable array para sa pagma-manipulate natin nung mga laman nya na data. 

example: 
const numberContainer = [1, 2, 3]

const newContainer = numberContainer.map(number =>{
    return number * number
})

output:
1 4 9

diba may numberContianer tayo example, then gusto natin imanipulate yung bawaat number na nasa loob nya gagiwin lang natin gawa tayo new variable for numberContainer natin, then kunin na natin yung numberContainer.map(number =>{
    return number * number
})

console.log(newVariable)


ang .filter is sya gagamitin natin para mag condition kung ano-anong data lang ang isasama natin then saka natin imamanipulate yung mga nakuha lang don sa ginawa nating condition using .map

example: 

const numbers = [1, 2, 3, 4, 5]

const newNumber = numbers.filter(number)

