container = [];

while(true){

    console.log("1. Add Product");
    console.log("2. View all Product");
    console.log();

    let choices = Number(prompt("Enter choice: "));
    console.log();

    if(choices === 1){
        let firstName = String(prompt("First name: "));
        let lastName = String(prompt("Last name: "));
        let age = Number(prompt("How old are you?: "));
        let eSports = String(prompt("E/Sports: "));
        console.log();

        let person = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            eSports: eSports
        };

        container.push(person);
        console.log("Prodduct succesfully added.");
        console.log();
    }

    else if(choices === 2){
        for(let i in container){
            console.log(`First Name  : ${container[i].firstName}.`);
            console.log(`Last Name   : ${container[i].lastName}.`);
            console.log(`Age         : ${container[i].age}.`);
            console.log(`eSports     : ${container[i].eSports}.`);
            console.log();
        }
    }

    else{
        console.log("Invalid Input!");
        console.log();
    }

}


