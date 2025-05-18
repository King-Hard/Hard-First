# For Loop
1, for loop - same lang sya with while loop pero yung kay forr loop mas pinaikli na version, kase pwede tayo gumawa ng varibale and condition sa loob ng for loop function natin.

2, iterate - same with while loop din na iterate part, kukunin natin yung lahat ng laman ng array natin using 2 varibles array and index.

3, for in - heto yung pinaka simple way natin para makapag-iterate tayo, para malabas natin lahat nung laman ng array natin. Using array variable sa labas then gawa ngayyon tayo ng for loop sa loob non let i in array variable tas console.log lang natin yung array variable then yung index natin natin na i
let array = [1, 2, 3];

for(let i in array){
    console.log(array[i])
}


4, for of



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