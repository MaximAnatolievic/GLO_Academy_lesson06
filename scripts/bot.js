'use strict'
let isNumber = function (n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function game(){
    let num = Math.floor(Math.random() * 100);
    console.log(num);
    let count;
    function check(){
        let tryNum  = prompt("Угадай число от 1 до 100");
        let answer;

        if(!tryNum && tryNum == null){
            answer = alert("Игра окончена.");
            count = 4;
            console.log(tryNum);
        }
        else if(!isNumber(tryNum)){
            answer = alert("Введи число!");
        }
        let converted = parseInt(tryNum);
        if (num < converted){
            answer = alert("Загаданное число меньше");
            count = 2;
        }
        else if (num == converted){
            answer = alert("Поздравляю, Вы угадали!!!");
            count = 3;
        }
        else if (num > converted){
            answer = alert("Загаданное число больше");
            count = 1;
        }
        if(count !=3 && count != 4){check()}
        return answer;
    }    
    console.dir(check);
    return check();
}

game();
