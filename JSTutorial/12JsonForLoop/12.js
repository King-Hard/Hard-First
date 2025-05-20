
let container = [ ];

let name = String(prompt("Full Name: "))
console.log();
let math = Number(prompt("Math: "));
let science = Number(prompt("Science: "));
let english = Number(prompt("English: "));
let mapeh = Number(prompt("Mapeh: "));
let filipino = Number(prompt("Filipino: "));
console.log();
console.log();

let grade = {
    nameG: name,
    mathG: math,
    scienceG: science,
    englishG: english,
    mapehG: mapeh,
    filipinoG: filipino
}

container.push(grade);

let average = ((math + science + english + mapeh + filipino) / 5);

for(let gra in container){
    console.log("----------Result----------")
    console.log();
    console.log(`Full name: ${container[gra].nameG}`);
    console.log();
    console.log(`Math grade: ${container[gra].mathG}`);
    console.log(`Science grade: ${container[gra].scienceG}`);
    console.log(`English grade: ${container[gra].englishG}`);
    console.log(`Mapeh grade: ${container[gra].mapehG}`);
    console.log(`Filipino grade: ${container[gra].filipinoG}`);
    console.log();
    console.log(`Grade average: ${average}`)
}












