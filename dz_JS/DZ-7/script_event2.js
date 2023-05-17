let boxes = document.querySelectorAll('.box');
for (const box of boxes) {
    let count = 5;
    box.addEventListener('click', () => {
    box.innerText = --count;
    console.log(count);
    console.log(boxes.length);
    if (count == 0) {
        event.target.remove();
        if (boxes.length == 0) {
            alert("Вы удалили все box");}
    } 
})
};






// let boxes = document.querySelectorAll('.box');
// if (boxes.length == 1) {
//     alert("Вы удалили все box");
// } else{
//     for (const box of boxes) {
//         let count = 5;
//         box.addEventListener('click', () => {
//         box.innerText = --count;
//         if (count == 1 && boxes.length == 1 ) {
//             alert("Вы удалили 1 box");
//             event.target.remove();
//             } if (count == 0 ) {
//                 alert("Вы удалили все box");
//                 event.target.remove();
//                 } 
//     })
//     };
// }
