let names = ["Hard", "Herd", "Hird", "Hord", "Hurd"];
let input = String(prompt("Name: "));
let isFound = false;

for(i = 0; names.length; i++){
    if(names[i] === input){
    console.log(`Found name: ${input}`);      
    isFound = true;  
    break;
    }
}

if(!isFound){
    console.log(`Name: ${input}, not found!`);
}




// we have while loop diba, para makapag-condition tayo 
// need pa natin na gumawa ng variable sa labas
// pero dito sa for loop same lang sila ni while loop
// nag-o-out put ng infinite. Pero yung way natin 
// dito is sa loob na ng for funtion natin tayo
// gagawa ng condition

for(let i = 0; i < 5; i++){
    console.log("Hello")
}


lives = 5;

for(let answer = String(prompt("Answer: ")); answer != "5";){
    lives--;
    console.log(`Your answer ${answer} is wrong! Lives left ${lives}.`)

    if(lives === 0){
        console.log("You Lose!")
        break;
    }

    let = answer = String(prompt("Answer: "));

    if(answer === "5"){
        console.log("You Won!")
        break;
    }
}

let array = ["Hard", 2, 3, 4, "Hurd"]

for(let ind = 0; array[ind]; ind++){
    console.log(array[ind])
}

let container = [13, 2, 3, "pogi ako"]

for(let c in container){
    console.log(`${parseInt(c)+1}, ${container[c]}.`)
}


