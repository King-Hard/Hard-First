let dayNumber = Number(prompt("Pick a number from 1 to 7: "))

switch(dayNumber){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input. Please enter a number from 1 to 7.");
        break;
}














let num1 = Number(prompt("Enter the first number: "));
let operator = String(prompt("Operators (+ - ÷ x): "));
let num2 = Number(prompt("Enter the second number: "));

switch(operator){
    case "x":
        console.log(num1 * num2);
        break;

    case "÷":
        console.log(num1 / num2);
        break;

    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    default:
        console.log("Invalid Operator!");
        break;

}

