'use strict'

let num = Math.floor(Math.random( ) * (100+1));
console.log(num)
let tryNum = +prompt("Угадайте число");

if(tryNum == num){
    alert('Вы угадали!!!!')
}
else if(!tryNum){
    alert('Игра окончена')
}
else if (tryNum > num){
    tryNum = +prompt("Загаданное число меньше. Введите число");
}
else if (tryNum < num){
    tryNum = +prompt("Загаданное число больше. Введите число");
}