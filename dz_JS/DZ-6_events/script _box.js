let num = parseInt(prompt ("Введите колличество квадратов:"));
let min = parseInt(prompt ("Введите колличество минут:"));
let sec = 0;
let ml = 0;
// let value = parseInt(prompt ("Введите колличество минут: \n1 - 5 min\n2 - 10 min\n3 - 15 min\n (Default - 20 min)"));
// let min = 0
// switch (value) {
//     case 1:
//         min=5;
//         break;
//     case 2:
//         min=10;
//         break;
//     case 3:
//         min=15;
//         break;
//     default:
//         break;
// }
function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let body = document.querySelector('body');
for (let i = 0; i < num; i++) {
    let div = document.createElement("div"); 
    div.className = "box";
    div.innerText = i + 1;
    div.style.backgroundColor = ` rgb(${random (0,255)}, ${random (0,255)}, ${random (0,255)})`;
    div.style.left = `${random(0, window.innerWidth - 101)}px`;
    div.style.top = `${random(50, window.innerHeight - 101)}px`; 
    body.appendChild(div);
}
// div.style.width = 100 + "px";
    // div.style.height = 100 + "px";
    // div.style.left = "0";
    // div.style.top = 50 + "px";
    // div.style.backgroundColor = "red"; 
    // div.style.border = "solid 4px black";
    // div.style.display = "flex";
    // div.style.justifyContent = "center";
    // div.style.alignItems = "center";
    // div.style.fontSize = 35 + "px";
    // div.style.margin = 5 + "px";
    // div.style.transition = 1 +"s";
    // // div.style.position = "absolute";

let boxes = document.querySelectorAll ('.box');
  for (const box of boxes) {
    box.addEventListener('click',() => {
    event.target.remove();
    });
  }

  let left = document.querySelector('p');

  setInterval (() => {
    let boxes = document.querySelectorAll ('.box');
    left.innerText = "Left : " + boxes.length;
    for (const box of boxes) {
    box.style.left = `${random(0, window.innerWidth - 101)}px`;
    box.style.top = `${random(50, window.innerHeight - 101)}px`;} 
  }, 1000);
  
  let time = document.querySelector('.time');

  let id = setInterval(() => {
    checkTime ();
    let minStr = (min > 9) ? min : `0${min}`;
    let secStr = (sec > 9) ? sec : `0${sec}`;
    let mlStr = (ml > 9) ? ml : `0${ml}`;

    time.innerText = minStr + ":" + secStr + ":" + mlStr;
  }, 18);

function checkTime () {
    let boxes = document.querySelectorAll ('.box');
    if (boxes.length == 0){
        clearInterval (id)
        alert ("Вы уложились");}
    ml--; 
    if (ml <= 0) {
        if (sec > 0){
            sec--;
            ml+=60;
        } else {
            if (ml==0 && sec==0 && min==0){
                clearInterval (id)
                alert ("Время вышло");
            } else{
                min--;
                sec+=60;
            } 
        }
    }
  }