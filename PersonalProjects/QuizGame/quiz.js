console.log("Hi! My name is John Jersie Santiago. I live in a quiet town and I enjoy creating simple games and quizzes using JavaScript. During my free time, I like reading stories, watching science videos, and learning how to code. I just turned 17 years old last week, and I’m excited to build more projects as I keep learning!");

let age = String(prompt("Based on the story, how old is John Jersie?: "))
lives = 3;

while(age != "17"){
    lives--;
    console.log(`Your answer: ${age} is wrong! Lives left ${lives}.`);

    if(lives === 0){
        console.log("You Lose!");
        break;
    }

    age = String(prompt("Based on the story, how old is John Jersie?: "))

    if(age === "17"){
        console.log(`You Won! You still have ${lives} lives left.`);
        break;
    }

}

