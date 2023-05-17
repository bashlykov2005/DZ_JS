function random (num = 255) {
    return Math.floor((Math.random() * num) + 1);
}
function myrandom (from, to) {
    return Math.floor((Math.random() * (to - from + 1)) + from);
}
let countW = 0;
let countH = 0;
let countW2 = window.outerWidth - 125;
let countH2 = window.outerHeight - 215;
let countW3 = 5;
let countH3 = 100;
let countW4 = window.outerWidth - 225;
let countH4 = window.outerHeight - 315;
let countW5 = 110;
let countH5 = 200;
let countW6 = window.outerWidth - 325;
let countH6 = window.outerHeight - 415;
let box = document.querySelector('.box'); 
setInterval(() => { 
    box.innerText = `${myrandom(1, 9)}`
    box.style.setProperty ('background-color', `rgb(${random()}, ${random()}, ${random()})`);
    if (countW <= window.outerWidth - 125){
        box.style.setProperty ('left', `${countW+=5}px`);
    } else if (countH <= window.outerHeight - 215){  
        box.style.setProperty ('top', `${countH+=5}px`);
    } else if (countW2 >= 5){  
        box.style.setProperty ('left', `${countW2-=5}px`);
    } else if (countH2 >= 100){  
        box.style.setProperty ('top', `${countH2-=5}px`);
    } else if (countW3 <= window.outerWidth - 225){
        box.style.setProperty ('left', `${countW3+=5}px`);
    } else if (countH3 <= window.outerHeight - 315){  
        box.style.setProperty ('top', `${countH3+=5}px`);
    } else if (countW4 >= 105){  
        box.style.setProperty ('left', `${countW4-=5}px`);
    } else if (countH4 >= 200){  
        box.style.setProperty ('top', `${countH4-=5}px`);
    } else if (countW5 <= window.outerWidth - 325){
        box.style.setProperty ('left', `${countW5+=5}px`);
    } else if (countH5 <= window.outerHeight - 415){  
        box.style.setProperty ('top', `${countH5+=5}px`);
    } else if (countW6 >= 205){  
        box.style.setProperty ('left', `${countW6-=5}px`);
    } else if (countH6 >= 300){  
        box.style.setProperty ('top', `${countH6-=5}px`);
    }
}, 50); 


