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

Sa filter natin example: may name and profession tayo, gusto natin hanapin kung sino sino yung may mga same na profession. Once na yung hinahanap natin is tumugma sa mga folder na meron mga file na katulad nga doon sa hinahanap natin is maha-handle na rin natin lahat ng file sa loob ng folder na yon.

//diba galing using filter sya yung pangha-handle natin para makuha yung mga need lang natin yung mga folder na need lang natin sa loob ng folderContainer, after non using that one condition sa mga folder na may katugma sa hinahanap natin file is maha-handle na natin lahat ng folder na may ganong file sa loob ng folder natin, and then also yung mga files na nasa loob ng mga folder na yon is pwede nating ma access.


