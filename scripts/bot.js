'use strict'
let isNumber = function (n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function game(){
    let num = Math.floor(Math.random() * 100);
    console.log(num);
    let count;
    let tries = 10;
    function check(){
        let tryNum  = prompt("Угадай число от 1 до 100");
        let answer;

        if(!tryNum && tryNum == null){
            answer = alert("Игра окончена.");
            count = 4;
        }
        else if(!isNumber(tryNum)){
            answer = alert("Введи число!");
        }
        let converted = parseInt(tryNum);
        if (num < converted){
            tries--;
            answer = alert(`Загаданное число меньше. Осталось попыток ${tries}`);
            count = 2;
        }
        else if (num == converted){
            answer = confirm("Поздравляю, Вы угадали!!! Играем ещё?");
            if(answer){
                game();
            }
            return answer;
        }
        else if (num > converted){
            tries--;
            answer = alert(`Загаданное число больше. Осталось попыток ${tries}`);
            count = 1;
            
        }
        if(count !=3 && count != 4){
            if(tries>0){check()}
            else if(tries == 0){
                answer = confirm("Попытки закончились. Попробовать снова?");
                if(answer){
                    game();
                }
            }
        }
        return answer;
    }    
    console.dir(check);
    return check();
}

game();
