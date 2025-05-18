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


