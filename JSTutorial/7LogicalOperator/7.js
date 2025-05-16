//let hasDegree = ("Yes");
//let experience = (1);

//let inputUser = prompt("Degree-yes or no/Experience-how many years?: ")

//if(inputUser ==
//    hasDegree || inputUser >= experience){
//    console.log("You're hire!")
//}
//else{
//    console.log("Maybe next time..")
//}


//let email = ("pogiako123");
//let password = ("12345");

//let userName = String(prompt("Username: "))
//let emailInput = String(prompt("Email address: "));
//let passwordInput = String(prompt("Password: "));

//if(email === emailInput && password === passwordInput){
//    console.log(`Hello, ${userName}!`)
//    console.log("Login Succesfully!")
//}
//else{
//    console.log("Try again!")
//}


// Ganda nung sa tutorial challenge sobrang ikli lang using nested, pinanood ko sya after ko gawin yung naisip kong idea. Heto yung akin: 

let registered1 = ("Yes")
let registered2 = ("No")
let age = (18)

let registeredInput = prompt("Are you already registered?: ")
let ageInput = prompt("How old are you?: ")

if(registered1 == registeredInput && ageInput >= age){
    console.log("(Valid Voter) You're allowed to vote.")
}
else if(registered2 == registeredInput && ageInput >= age){
    console.log("(Register First) You meet the age requirement, but you're not registered yet.")
}
else if(registered1 == registeredInput && ageInput < age){
    console.log("(Invalid Voter) Age requirement not met. You must be at least 18 years old.")
}
else{
    if(registered2 == registeredInput && ageInput < age){
        console.log("(Non Voter) You're too young to register or vote at this time.")
    }
}


