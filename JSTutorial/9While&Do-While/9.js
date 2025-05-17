let x = 0;

while(x < 5){
    console.log("Hello World!");
    x++;
}

// iterate array, print all items in the array.

let array = ["Hard", "Herd", "Hird", "Hord", "Hurd"]
let i = 0;

while(array[i]){
    console.log(array[i]);
    i++;
}


let numbers = [5, 4, 3, 2, 1];
let n = 0;
let sum = 0;

while(numbers[n]){
    sum += numbers[n];
    n++;
}

console.log(sum)

let lives = 3;
let answer = String(prompt("3 = 2: "));

while(answer != "5"){
    lives--;
    console.log(`Your answer: ${answer} is wrong! Lives left ${lives}.`);

    if(lives === 0){
        console.log("You Lose!")
        break;
    }

    let answer = String(prompt("3 = 2: "));

    if(answer === "5"){
        console.log("You Won!");
        break;
    }
}



