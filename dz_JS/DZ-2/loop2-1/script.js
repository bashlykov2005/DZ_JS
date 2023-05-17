// square

// var text="";
// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 15; j++) {
//         if (i==0 || i==8 || j==0 || j==14) {
//             text+="*"
//         } else{
//             text+=" "
//         }
//     }
//     text+='\n';
// }
// console.log(text);
// console.log(" "); 

// ***
// **
// *

// var text="";
// let count= 10;
// for (let j = 0; j < 10; j++) {
//     for (let i = 0; i < count; i++) {
//         if (i==0 ||i==count - 1 ||j==0){
//         text+="*";
//     } else{
//     text+=" ";
//   }
//     }
//     count--;
//     text+='\n';
// }
// console.log(text);

// // var text="";
// // for (let i = 0; i < 11; i++) {
// //     for (let j = 0; j < 11; j++) {
// //       if (i==0 || j==0) {
// //         text+="*"
// //     } 
// //     }
// //     for (let j = i+1; j < 11; j++) {
// //             text+=" "
// //     }
// //     for (let j = 0; j < (i + 1) - i; j++) {
// //         text+="*"
// //     }
// //     text+='\n';
// // }
// // console.log(text);

// *
// **
// ***

// var text="";
// let count= 1;
// for (let j = 0; j < 10; j++) {
//     for (let i = 0; i < count; i++) {
//         if (i==0 ||i==count - 1 ||j==9){
//         text+="*";
//     } else{
//     text+=" ";
//   }
//     }
//     count++;
//     text+='\n';
// }
// console.log(text);

// // var text="";
// //   for (let i = 0; i < 11; i++) {
// //     for (let j = 0; j < i; j++) {
// //       if (i==10 || j==0) {
// //           text+="*"
// //       } 
// //    }
// //     for (let j = 0; j < i; j++) {
// //       text+=" "
// //     }
// //     for (let j = 0; j < (i + 1) - i; j++) {
// //             text+="*"
// //     }
// //     text+='\n';
// // }
// // console.log(text);
// // console.log(" "); 
// // console.log(" "); 

// triangle

var text="";
let count= 29;
for (let j = 0; j < 10; j++) {
    for (let i = 1; i < count; i++) {
        if (i==count - 19 || j==9 || i== j+10 ){
        text+="*";
    } else{
    text+=" ";
  }
    }
    count--;
    text+='\n';
}
console.log(text);

// var text="";
// for (let i = 0; i < 11; i++) {
//     for (let j = i + 1; j < 11; j++) {
//       text+="  "
//     }
//     for (let j = 0; j < (i + 1) - i; j++) {
//       text+="* "
//     } 
//     for (let j = 0; j < 2 * i; j++) {
//       if (i==10) {
//         text+="* "
//       } 
//       }
//     for (let j = 0; j < 2 * i; j++) {
//             text+="  "
//     }
//     for (let j = 0; j < (i + 1) - i; j++) {
//       text+="* "
//     }
//     text+='\n';
// }
// console.log(text);

