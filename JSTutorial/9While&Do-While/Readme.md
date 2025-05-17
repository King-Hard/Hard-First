# While & Do-While loop
1, while - while loop - infinite loop to, example may ginawa tayo condition sa loob ng while function natin yung iru-run nya na output is tuloy tuloy. Maganda to gamitin sa input type natin like may condition tayo habang di pa na me-meet ni user yung condition natin maglalabas sya nang maglalabas ng input type. 

- sa while loop natinang function neto is infinite output depende sa gagawwin nating condition

2, eterate - function neto is pi-print natin lahat yung laman ng isang array natin using array variable, and index varibale natin then sa execution need lang natin natin ng false condition para ma run yung console log natin then array varibale and then index variable natin tapos sa baba +1 lang tayo using double ++ 

3, break - papatigilin lang natin yung output natin since naka while loop tayo, mraming way para ma pa stop sya pero maganda an gamitin tong break para once na na met na ng condition natin mag stop na yung while loop natin na infinite

4, do-while - dito naman may do tayo, bago mag proceed sa while function natin. Kumbaga ru-run muna ng system natin yung do bago yung partner nya na while. 
do{
    condition
}
while(){
    consition
}












let lives = 3;
let num = String(prompt("3 + 2: "));

while(num != "5"){
    lives--; // ibig sabihin ng dalawang minus sign natin is -1, ganun din sa dalawang ++ pero +1 naman.
    console.log(`Your answer: ${num} is wrong! Lives left: ${lives}`);
    
    if(lives === 0){
        console.log("You Lose!")
        break;
    }
    num = String(prompt("Write the correct answer (3 + 2): "))

    if(num === "5"){
        console.log("You Won!")
        break;
    }
}

