let num = parseInt(prompt ("Введите колличество квадратов:"));
let min = parseInt(prompt ("Введите колличество минут:"));
let sec = 0;
let ml = 0;

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