# Dispalying Output
1, console.log() - heto yung ginagamit natin pang print ng output, example gusto natin magpalabas ng hello world na text gagamit lang tayo ng console.log to print the word hello world.

2, document.getElemntById("name nung id natin don sa element tag, example sa h1 natin.") - nagagawa neto is nakukuha natin yung elemnt tag natin kumbaga handle natin yung magigigng laman ng h1 natin or element tag natin using document.getElemntById("") natin. Then kung gusto natin palitan yung value ng h1 natin .innerHTML lang then equal sign tapos yung word na gusto natin ilagay na value sa loob ng h1 natin, example Hello World!


# Varibales and DataTypes
1, let - Heto yung ginagamit natin pang declare ng variable, then yung let din nato is ginagamit natin kung gusto natin na yung variable natin is pwede natin i-change, and also heto yung default or sya dapat yung pinaka ginagamit talaga antin na pang declare ng variable natin.
2, const - heto naman ginagamit din natin sya sa pag declare ng variable, same lang sila ni let. Ang pinagkaiba lang is si const hindi na natin pwede ibahin yung default value na inilagay natin sa loob ng const varibale natin. Unlike kay let na pwede na pwede pa natin i-change yung value nya.
3, datatypes - meron tayong string, number, and boolean. Sa string heto yung ginagamit natin para sa mga text, sa number naman para sa numbers natin, and last yung boolean ginagamit natin to para sa condition natin, true ba or false.
4, concatination using (+ sign or , sign) - ginagamit naman natin to para sa pagdugtong-dugtong ng mga variabes natin, or kahit na anong gusto natin pagsamasamahin.

# Numbers and Operators
1, Meron tayong Multiplication, Division, Addition, Subtraction, Exponent, and Remainder. (*, /, +, -, **, and %.)
2, PEMDAS - parenthesis, exponent, multiplication, division, addition, and subtraction. 
(Mahalaga to sa conversion, since pwede natin manipulate yung solution natin in 1 line. kagaya sa kukuin natin yung average natin sa final grades pag plus muna natin yung 8 subjects sa loob ng parenthesis since sya yung uunnahin ng system natin, after non lagay tayo ng division 8 don sa labas na parenthesis natin.)

# Strings
1, using parseInt or parseFloat - makakapag-convert tayo ng string value to number value, example let varibale = pasrseInt or parseloat("string number") tapos yung number natin na naka string magagawa natin syang number using parseInt or parseFloat.

2, string template - using backtick "``" sa loob ng backtick natin pwede na tayo mag concatination pero hindi using + sign kundi gamit nayung backtick natin. Gawa lang tayo ng backtick lagay na tayo strings tapos pagmaglalagay tayo ng varibale need lang natin ng dollar sign and curly braces ${variable} pwede na ulit tayo maglagay ng mga strings hindi nanatin need gumagmit ng + sign sa pag concatinate gagamit na lnag tayo ng backtick, dollar sign and curly braces.

3, Container index
- index - heto yung 0, 1, 2, 3, and so on (ginagamit natin to kunyari sa isang container na mya mga lamang items, then may certain item lang tayo ng gusto i-select pwede natin to gamitin. example sa container may 1 to 5 na nakalgay tas gusto ko b=palabasin yung number 3 so bibilang tayo umpisa sa 0 then ang aswer is varibale then 2 para ma call natin sya.) Sa paggamit neto need natin is naka square bracket tayo sa container variable and then doon sa paglagay natin ng variable tapos index.


# Arrays
1, creating array - need lang natin natin ng let variable and then bracket, tapos don na natin i-store yung mga value/elements natin.

2, adding value - meron tayo 2 ways para makapag-add ng value sa loob ng array natin:
push - variable.push("value") - sa hulihan ng array natin madadagdag yung value
unshift - variable.unshift("value") - heto naman sa unahan ng array natin madadagdag.

3, deleting value - meron din tayong 2 ways sa pag delete ng value sa loob ng array natin:
pop - varibale.pop() - yung matatanggal na value is yung nasa hulian ng array natin.
shift - varibale.shift() - heto naman yung matatanggal na value is yung nasa unahan ng array natin.

# Conditianl Statement
1, comparison meron tayong for string and numbers
-  double equal - ginagamit to pag gagawa tayo ng condition using strings, variable same daw ba sa isa pa nating variable
- not equal - ginagamit din natin to sa condition pag strings, yung varibale natin not equal daw sa isa nating variable
- greater than - heto naman sa numbers, yung unang variable daw natin mas mataas kesa sa next variable natin
- less than - heto naman sa numbers, mas mababa daw yung first variable natin kesa sa second variable
- greater than equal - heto naman sa numbers, mas mataas daw or equal yung first variable natin kesa sa second variable natin
- less than equal - heto naman sa numbers, mas mababa naman daw yung first variable natin kesa sa 2nd variable

2, if and else - 
if(variable  == variable){
    condition
} yung if natin isang beses lang natin to pwede gamitin 
else{
    condition
} yung else natin sya yung magru-run pag di na meet ng uif natin yung ginawa nating condition sakanya

3, else if(condition){
    condition
} yung else if naman maganda to gamitin pag gagamit tayo ng multiple if condition instead na puro if gagawin natin is if muna tapos yung mga sumunod na condition is else if na gagamitin natin.

# Logical Operators
1, AND && - dapat yung dalawa nating condition is mag tugma para mag run yung condition natin, if hindi magru-run na yung else natin.

2, OR || - dapat isa sa dalawa nating condition is ma met natin para mag run yung condition natin, then kung wala ni isa tumama sa concition natin magru-run ngayon yung else natin.

3, nested if else - heto naman yung if and else natin na may laman ding if and else kumbaga para sayang anak ng if natin may lamang if else, depende kat san tayo mag nested pwede sa if ba sa else, anywhere.

# Switch
1, switch - heto yung pinaka body natin para makagawa ng mga condition yung switch, case, and break.
Need lang natin ng let variable, then gawa tayo ng switch function open and close parenthesis lagay lang natin yung variable kung san mangagaling yung input. Then dito na papasok yung case 

2, case - heto yung magiging if natin parang sa conditional statement lang, bali case number or string tapos colon. Saka tayon gagawa ng condition sa baba nya. Then dito na papasok yung break

3, break - heto yung pipigil sa condition natin kapagka na met nya na yung condition na need natin. Para hindi na sya mag tuloy-tuloy.

4, default - heto naman yung parang else natin sa conditional statement, pag yung inenter ni user di na meet ng case natin or wala sa case natin yung iniput ni user na value saka to magru-run.

# While loop
1, while - function neto paulit-ulit na pag-run ng output natin or yung condition na nasa loob na while loop natin.

console.log("Hi! My name is John Jersie Santiago. I live in a quiet town and I enjoy creating simple games and quizzes using JavaScript. During my free time, I like reading stories, watching science videos, and learning how to code. I just turned 17 years old last week, and I’m excited to build more projects as I keep learning!");

let age = String(prompt("Based on the story, how old is John Jersie?: "))
lives = 3;

while(age != "17"){
    lives--;
    console.log(`Your answer: ${age} is wrong! Lives left ${lives}.`)

    if(lives === 0){
        console.log("You Lose!)
        break
    }

    age = String(prompt("Based on the story, how old is John Jersie?: "))

    if(age === "17"){
        console.log("You Won!")
        break
    }

}

2, iterate array - printing all output na nasa loob ng array natin.
let array = [1, 2, 3, 4, 5];
let i = 0;

while(array[i]){
    console.log(array[i]);
    i++;
}
// output neto is ilalabas nya lahat ng values sa loob ng array natin

3, break - mahalaga to since heto yung gagamitin natin na pang stop nung condition natin, since naka while tayo kahit na met na natin yung condition may loop pa rin sya. Kaya dit ona papasok yung break natin.

# For Loop 
1, for loop - yung for loop natin parang while loop lang din sya naglalabas ng output na naka infinite. Pero and advantage neto is mas napapaikili natin yung code since pwede na tayo mag lagay ng variable with value and condition sa loob ng for loop natin unlike sa while loop na need pa natin mag gumawa ng ilang varibale to run the condition they give to the system.


for(i = 0; variable > 5; i++){
    console.log("Hello World)
}
// Dito sa for loop - yung variable, condition, and operator (optional) is sa loob na ng for loop natin nakalagay instead na gumawa pa tayo ng variable sa labas and mag condition pa tayo, dito 1 line na lang then yung ipapagawa natin. Bali naka tipid tayo ng 3-5 lines of code.


2, interate - same langdin to sa iterate ng while loop, pagkuha lang din ng mga laman ng array variable natin. 

let array = [mga items natin];

for(i = 0; array < 0; i++){
    console.log(array[i])
}
// halos same lang sya sa for in natin pero dito may condition pa tayo pero don sa fon in gagamit na lang tayo ng variable then gawa tayo for loop let i in variable then console log na natin yung variable[i] natin.

3, for in - heto naman yung easiest way or pinakamaikling way para mag iterate tayo or para ma iplabas natin lahat ng out put sa loob ng array natin using for(let i "in" variable)
Example:
let variable = [mga items natin];

for(let i in variable){
    console.log("variable[i])
}
// out put neto is maipapalabas natin lahat ng laman nung array natin.

# Json Data Container
1, json - Yung json natin is para syang container or folder ng isang bagay for example peron info ng peron ganon ngayon since may json na tayo which is the person syempre maglalagay tayo ng mga file sa loob ng folder natin na json. Kunng may person tayo ang pwede nyang laman: Name, age, sex, and so on. then kung may exact value tao lagay lang natin sa tabi ng variable natin kagay sa name then colon saka tayo gagwan ng string or number ba kung ano gusto nati ilagay sa loob ng peron file natin which are names, age, sex, and so on.

let name = prompt("Name : ");
let age = prompt("Age   : ");

// heto na yung json natin gawa lang tayo ng folder name which is the person variable natin = then curly braces sa loob ng curly braces natin don nanatin ilalagay yung files natin. What i mean yung value na gusto natin ilagay sa json natin since naka person tayo lalagay mna tayo ng name and age lang.
Ngayon pag meron na tayong file variable pwede nantin ilagay yung data sa loob ng file natin. Pwede na tayo mag set ng value or pwede rin na galing kay user using varibale na ginamit natin don sa pag input ni user na ng data which are name and age.

let person = {
    name: name,
    age: age
}

console.log(person.name) 

// kung gusto natin na makuha yung value na nasa loob ng person natin or yung nilagay ni user need lang natin ng console.log(person.name) // ginawa lang natin folder.file kinuha lang natin yung file sa loob ng folder natin para i-print. Or kaya naman lahat n g value sa loob ng folder natin deretsyo na agad tayo sa pinaka variable ng folder natin yung folder.name kase is para lang sa certain na file na gusto natin i-print.


2, json getting value - pagkuha lang natin ng certain file sa loob ng folder natin using tuldok or dot ( . )

let firstName = String(prompt("Name: "));
let firstName = Number(prompt("Age: "));

let person = {
    name: firstName,
    age: age
}
console.log(`My name is: ${person.name}.`)
// output neto is makukuha kang natin na file sa folder is yung name since gumamit tayo ng tuldok pangkuha nati nng certain file sa loob ng folder natin kahit na more than 1 yung files natin since gumamit nga lang tayo ng tuldok di masasama yung ibang file na nas aloob ng folder natin. Heto yung function ng json getting file/value natin.


3, json array - heto mahalaga rin to pag yung json natin is kukuha tayo ng multiple folder then kada folder yung laman nila na file pwede natin makuha.
Example meron tayong empty container para sa mga folder na ilalagay natin depende sa ganong karaming folder ang gagwin ni user

// container ng mga folders natin.
let container = [ ];

// while true para maka unli hingi tayo ng input kay user.
while(true){
    console.log("Inventory Menu");
    console.log("1. Add Student");
    console.log("2. View All Students");

    let choices = Number(prompt("Enter choice: "));

    if(choices === 1){
        let name = String(prompt("Name : "));
        let age = String(prompt("Age   : "));
        let sex = String(prompt("Sex   : "));

        let person = {
            name: name,
            age: age,
            sex: sex
        }

        // sa container daw natin mag pu-push tayo or magdadagdag tayo ng item ang idadagdag natin is yung folder natin na person, bali lahat ng files s aloob ng folder person natin is malalagay na ngayon sa empty container ng folders natin.

        container.push(person)
        console.log("Student sucessfully added.")
    }

    else if(choices === 2){
        // dito na natin gagawin yung json array na natutotun na natin.

        // gumamit lang tayo dito nag for in, for para sa i natin in container it means kada folder na nasa loob ng container folder natin.

        // kukunin daw natin yung bawat folder na yon sa loob ng folder container natin, para to sa for in natin na ginawa.

        for(let i in container){

            // console.log lang daw natin bawat folder na nasa loob ng folder container natin pero dapat isa isa kaya dito na papasok yung array index natin sa container daw . file since may index tayo na ginawa kukuin nya lahat ng name sa loob ng folder natin para malagyan nng maayos na format.

            // console lang daw natin yung yung bawat lamn sa loob ng container natin na folder with their file name which are name, age, and sex.
            console.log(`Name : ${container[i].name}.`);
            console.log(`Age  : ${container[i].age}.`)
            console.log(`Sex  : ${container[i].sex}.`)
        }
    }

    else{
        console.log("Invalid Input")
    }
}


# Functions
1, function - yung function ginagamit natin to para mag hold ng codes, kumbaga para syang component ready to use na ca-call na lang natin sya. Maganda rin to kase using this mas mapapaikli natin yung lines of code na magagamirt natin.

Code:
function variable(){
    codes
}

ginamit lang natin yung function na keyword then variable saka tayo maglalagay ng parenthesis. After those steps, punta na tayo sa loob ng function variable don na ngayon natin ilalagay yung mga codes na need natin kapag-cinall natin yung function nato.

2, comment - multiple lines using /* comments */

3, adding all numbers in container - heto naman pagkuha ng tatal sum ng mga numbers natin na nasa loob ng isang container.

Code: 
let container = [ ];

funtion addNumber(){
    let num1 = Number(prompt("Number: "));
    container.push(num1)

    console,log("Number added!);
    console.log();
}

function addAllnumbers(){
    let sum = 0;
    for(let number in container){
        sum += container[number];
    }
    console.log(`Sum of all numbers: ${sum}.`);
    console.log();
}

while(true){
    console.log("1. Add number");
    console.log("2. Sum of all numbers");

    let choice = String(prompt("Number: "));

    if(choice === 1){
        addNumber();
    }

    else if(choice === 2){
        addAllNumbers();
    }
    
    else{
        console.log("Invalid Number!");
        console.log();
    }
}


