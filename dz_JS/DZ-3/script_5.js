// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!». 

let name = prompt("Enter your name");
let symbol = "1234567890!@#$%^&*()_+-={}|[]\\:;\"'<>?,./";

let isCorrect = true;

for (let i = 0; i < symbol.length; i++) {
    if (name.includes(symbol[i])) {
        isCorrect = false;
        break;
    }
}
if (isCorrect) {
    alert ("Hello your name " + name + "!");
    } else {
        alert ("Вы ввели неверные символы");
    }

//     let name = prompt("Enter your name");
//     let symbol = "1234567890!@#$%^&*()_+-={}|[]\\:;\"'<>?,./";
    
//     let isCorrect = true;
    
//     for (let i = 0; i < symbol.length; i++) {
//        for (let j = 0; j < name.length; j++) {
//         if (name[j] == symbol[i]) {
//             isCorrect = false;
//             break;
//         }
//     }
// }
//     if (isCorrect) {
//         alert ("Hello your name " + name + "!");
//         } else {
//             alert ("Вы ввели неверные символы");
//         }


// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. 
// Текущий год укажите в коде как константу. 

const DATE = 2023
let age = parseInt(prompt ("Введите Ваш год рождения:"));  
alert ("Вам " + (DATE - age) + " лет."); 

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 
 
 let length = + prompt ("Введите длину стороны квадрата:");      
 alert ("Периметр квадрата " + (length * 4) + " см."); 

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности. 

let radius = +prompt("Введите радиус окружности:");
alert(("Площадь такой окружности: " + (3.14 * radius**2).toFixed(2)) + " cm2."); 

// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет 
// добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

let path =  parseInt(prompt ("Введите расстояние в км между двумя городами:"));   
let time =  parseInt(prompt ("Введите время за сколько часов хотите добраться:"));   
alert ("Скорость, с которой необходимо двигаться, чтобы успеть вовремя = "  
        + (path / time) +  " км/ч.");

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. 
// Курс валюты храните в константе. 

const Dollar = 76
const Euro = 81
let num =  +prompt ("Введите сумму долларов:");      
 alert ("Ваша сумма в евро: " + (((num * Dollar) / Euro).toFixed(2))); 

// 7. Пользователь указывает объем флешки в Гб. 
// Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку. 

const FLESH = 820
let size =  +prompt ("Введите объем флешки в Гб:");
alert ("На флешку помещается " + parseInt(size*1000 / FLESH) + " файл(ов) размером в 820 Мб.");

//8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит 
// сколько шоколадок может купить пользователь и сколько сдачи у него останется. 

let money =  +(prompt("Сколько у Вас денег?"));
let chokolate =  +(prompt("Сколько стоит 1 шоколадка?")); 
alert ("Вы можете купить "  + parseInt(money / chokolate) +  " шоколадок. Ваша слача "
+ ((money - (chokolate * parseInt(money / chokolate))).toFixed(2)) + " руб.");

// 9. Запросите у пользователя трехзначное число и выведите его задом 
// наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

let number =  parseInt(prompt("Введите число между 100-999:"));
if (number > 99 && number < 1000) {
    let one = parseInt(number /100);
    let two = parseInt(number % 100 /10);
    let three = parseInt(number % 10)
    let newNam = (three + "" + two + "" + one);
    alert (newNam);
} else {
    alert ("Это не число");
}

// // alert(("" + number).split("").reverse().join(""));

// 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. 
// В задании используйте логические операторы. В задании не надо использовать if или switch.

let sign =  parseInt(prompt("Введите целое число:"));
let message = (sign % 2 == 0) ? 'Число четное' :
  (sign % 2 == 1) ? 'Число не четное' : 
    'Это не число!';
alert( message );


//  let number =  parseInt(prompt("Введите целое число:"));
//     if (number % 2 == 0) {
//         alert ("Число четное");
//     } else if (number % 2 == 1) {
//         alert ("Число не четное");
//     } else {
//         alert ("Это не число!");
//     }

// 11. Напишите скрипт, который запрашивает у пользователя пароль подтверждения 
// некоторого действия. Допускается три возможных пароля («Step», «Web» и 
// «JavaScript»). После ввода пароля скрипт должен вывести сообщение 
// «Подтверждено» или «Отменено».

let pasword = prompt("Введите пароль:");
if (pasword == "Step" || pasword == "Web" || pasword == "JavaScript") { 
    alert ("Подтверждено");
} 
else {alert ("Отменено");}

// let pasword = prompt("Введите пароль:");
// if (pasword == "Step"){ 
//     alert ("Подтверждено");
// } else if (pasword == "Web"){ 
//     alert ("Подтверждено");
// } else if (pasword == "JavaScript"){ 
//     alert ("Подтверждено");
// } 
// else {alert ("Отменено");}

// // 12. Напишите скрипт, который запрашивает у пользователя число «х», проверяет 
// // его на принадлежность диапазону 0..100 и выводит соответствующее сооб-
// // щение (например, 10 — принадлежит, –10 — не принадлежит, 0 — принадлежит, 200 — не принадлежит).

// let number = + prompt("Введите число:");
// if (number >= 0 && number <= 100){ 
//     alert ("Принадлежит диапазону");
// } 
// else {alert ("Не принадлежит диапазону");}

// // 13.Напишите скрипт, который запрашивает у пользователя два числа «х» и «у», 
// // сравнивает их величины и выводит одно из сообщений: «x > y», «x< y» или
// // «x=y» в зависимости от введенных данных.

// let x = + prompt("Введите число X:");
// let y = + prompt("Введите число Y:");
// if (x > y){ 
//         alert (" X > Y");
//     } else if (x < y){ 
//         alert (" X < Y");
//     } else { 
//         alert ("X = Y");
//     } 

// // 14. Напишите скрипт, который запрашивает у пользователя цифру и выводит ее название:
// //  0 — «ноль», 1 —«единица», 2 — «двойка» и т.д. Если переменная не
// // является цифрой, выводится сообщение «не цифра».  

// let x =  parseInt(prompt("Введите число:"));
// if (x == 0){ 
//         alert ("ноль");
//     } else if (x == 1){ 
//         alert ("единица");
//     } else if (x == 2) { 
//         alert ("двойка");
//     } else  { 
//         alert ("Вне диапазона или не число");
//     } 

// 15.запросить у пользователя число от 1 до 6 и вывести сообщение о четности 
// числа (odd — нечетное, even — четное), либо "Out of range", если число выходит
//  за указанный диапазон

x = +prompt("Input x="); 
	switch(x){
        case 2:  
        case 4: 
        case 6: 
        alert ("even")
            break;
        case 1:  
        case 3: 
        case 5:
        alert ("odd")
        break;
        default: alert ("Out of range");
	}

//     16. запросите у пользователя подтверждение некоторого действия (используя диалог confirm)
//      и после его ответа выводит сообщение «Подтверждено» или «Отменено».

if (confirm ("Вам больше 18 лет?")){ 
        alert ("Подтверждено");
    } else  { 
        alert ("Отменено");
    } 

//  17.  рассчитываем ежемесячные платежи кредита, оформленного на несколько месяцев. Будем считать, 
// что годовая ставка кредита составляет 20% и она сразу начисляется на всю сумму, неменяясь в зависимости 
// от ежемесячных платежей.  

fund= +prompt ("sum");
month= +prompt ("month");
body = fund + 0.2 * fund * month / 12;
pay = body / month;
for (let i = 1; i<=month; i++) {
    console.log (" месяц " + i + "платеж " + pay);
}

// 18. Сгенерировать не больше десяти случайных чисел из диапазона 1–7. В случае если выпадает
// четверка, генерация прекращается. (18.1 Сгенерировать ровно 10 случайных чисел, но без четверок.)
// ([генератор «Math.random()» выдает дробные числа в диапазоне от 0 до 1. Если мы умножим это число на
// 6 и округлим при помощи команды Math.round(), то получим диапазон 0–6.])

for(i=0; i<10; i++){
    rnd = Math.round(Math.random()*6)+1;
    if(rnd==4) break;
    console.log(rnd);
    }

i=0;
while(i<10) {
rnd = Math.round(Math.random()*6)+1;
if(rnd==4) continue;
i++;
console.log(rnd);
}

// 19. Запросите у пользователя число N и выводит все четные числа от 2 до N. Например: ввод 10, вывод
// 2 4 6 8 10;

let nim =  parseInt(prompt("Введите целое число:"));
for (let i = 1; i <= nim; i++) {
    if (i % 2 == 0) {
    console.log( i );
    }  
}

// 20. Запросите у пользователя число N и выводит все нечетные числа от N до 1 в порядке убывания. Напри-
// мер, ввод 7, вывод 7 5 3 1;

let nem =  parseInt(prompt("Введите целое число:"));
for (let i = nem; i >= 1; i--) {
    if (i % 2 == 1) {
    console.log( i );
    }  
}

// 21.Запросите у пользователя число N и выводит все числа, на которые делится N, включая число 1 
// (примеры: ввод N=10, вывод 1, 2, 5;

let n =  parseInt(prompt("Введите целое число:"));
for (let i = 1; i <= n; i++) {
    if (n/i == n) {
    console.log( i );
    } else if (n/i == i){ 
        console.log( i );
    } else if (n/i == 2) { 
        console.log( i );
    }  else if (n/i == 3) { 
        console.log( i );
    }else if (n/i == 4) { 
        console.log( i );
    } else if (n/i == 5) { 
        console.log( i );
    } else if (n/i == 1) { 
        console.log( i );
    }
}

// 22.Запросить величину годовой депозитной ставки (в процентах) и выводит количество лет, по прошествии
//     которых вклад увеличится втрое

let x = +prompt("Введите желаемую ставку  в процентах/годовых:");
let years = 0;
let fand = 1000
while (fand < 3000){
years++;
fand += fand * x / 100;
}
alert("Через " + years + " года ваш вклад увеличится в трое");

// 23.Выведите ровно 10 случайных чисел из диапазона 1–20, кроме тех, которые
// делятся на 4.

for(i=0; i<10;){ 
    rnd = Math.round(Math.random()*19)+1;
    if(rnd % 4 == 0 ) continue;
    i++;
    console.log(rnd);
    }

// 23.Из-за утечки из бака охлаждения ежедневно вытекает 10% налитой воды. При объеме воды менее 10 литров
// возникает аварийная ситуация. Составьте программу, которая запрашивает у пользователя первоначальный 
// объем воды и рассчитывает, на сколько дней работы этого хватит.

let volume = +prompt("Введите объем бака в литрах:");
let days = 0;
while (volume > 10){
volume -= 10;
days++;}
alert("На " + days + " дней работы этого хватит");