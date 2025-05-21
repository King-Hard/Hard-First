/*
function additionSolution(){
    console.log(num1 + num2)
}

let num1 = Number(prompt("First number: "));
let operator = String(prompt("Operator: "));
let num2 = Number(prompt("Second number: "));

if(operator === "+"){
    additionSolution();
}
else{
    console.log("Invalid Operator!")
}
*/

let numbersContainer = [ ];

function addNumber(){
    let num = Number(prompt("Number: "));
    numbersContainer.push(num);
    
    console.log("Number added!");
    console.log();
}

function addAllNumbers(){
    let sum = 0;
    for(let number in numbersContainer){
        sum += numbersContainer[number];
    }
    
    console.log("Sum of all numbers: " + sum);
    console.log();
}

while(true){
    console.log("1. Add number")
    console.log("2. Add all numbers")
    console.log("3. Stop")

    let choice = Number(prompt("Number: "));
    console.log();
    
    if(choice === 1){
        addNumber();
    }
    
    else if(choice === 2){
        addAllNumbers();
    }
    
    else if(choice === 3){
        let exit = String(prompt("Type Exit to confirm: "));
        
        if(exit === "Exit"){
        console.log();
        console.log("Thank you! Hope you enjoyed using my mini system!");
        break;
        }
    }
    
    else{
        console.log("Invalid Input!");
        console.log();
    }
    
}