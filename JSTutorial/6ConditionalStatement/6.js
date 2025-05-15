console.log("hard" == "hard");

let num = 15;

console.log(15 == num);

let x = 23;
let y = 23;

console.log(x == y);

let num1 = 99;
let num2 = 90;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

if(num1 > num2){
    console.log("Yes, equal!")
}
else{
    console.log("Not, equal!")
}


let fruit10 = "banana";
let fruit20 = "banana";

console.log(fruit10 == fruit20);

let age1 = 10;
let age2 = 10;

console.log(age1 >= age2);




//let name = prompt("Please type your name: ")

//console.log(`My name is: ${name}`)

//let fruit1 = prompt("Your first fav fruit: ");
//let fruit2 = prompt("Your second fav fruit: ");
//let fruit3 = prompt("Your third fav fruit: ");

//console.log(`These are my favorite fruits: ${fruit1}, ${fruit2}, and ${fruit3}.`)

//let legalAge = 18;
//let yourAge = prompt("What's your age?: ")

//if(yourAge >= legalAge){
//    console.log("You are in a legal age.")
//}

//else{
//    console.log("You are not in a legal age.")
//}




//let user = prompt("Username: ");
//console.log(`Welcome, ${user}!`);

//let email = prompt("Email address or Phone number: ");

//let passwordStorage = ["pogi123"]
//let password = prompt("Password: ");

//if(password == passwordStorage){
//   console.log("Login Succesfully.")
//}
//else{
//   console.log("Password Incorrect!a")
//}


//let age = prompt("What's your age?: ");

//if(age >= 60){
//    console.log("Senior Citizen!");
//}
//else if(age > 18){
//   console.log("Legal Age!");
//}
//else if(age <= 17){
//   console.log("Minor Age!");
//}
//else{
//    console.log("Invalid Input!");
//}


let sub1 = Number(prompt("Mathematics: "))
let sub2 = Number(prompt("Science: "))
let sub3 = Number(prompt("English: "))
let sub4 = Number(prompt("Filipino: "))
let sub5 = Number(prompt("Mapeh: "))

let average = ((sub1 + sub2 + sub3 + sub4 + sub5) /5);

if(average >= 101){
    console.log("Invalid Grade!")
}
else if(average >= 98){
    console.log(`Highest Honor, with the average of ${average}!`)
}
else if(average >= 95){
    console.log(`High Honor, with the average of ${average}!`)
}
else if(average >= 90){
    console.log(`Honor, with the average of ${average}!`)
}
else if(average >= 75){
    console.log(`Passed, with the average of ${average}!`)
}
else{
    console.log(`Failed, with the average of ${average}!`)
}

