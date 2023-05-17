let first = document.getElementById("myOl");
first.style = "width: 450px; color: white; background-color: #e59fad; font-size: 20px; font-family: sans-serif; padding: 10px; list-style-position: inside;";

let lis = document.querySelectorAll('li');
 for(let i = 0; i < lis.length; i++){
        lis[i].style.backgroundColor = '#c45268';
        lis[i].style.margin = '10px';
        lis[i].style.padding = '5px 0 5px 11px';}

    let spans = document.querySelectorAll('span');
    for (const span of spans) {
        span.style.backgroundColor = '#71152d';
        span.style.marginLeft = '5px';
        span.style.padding = '5px 15px';}

// let spans = document.querySelectorAll('span');
// for(let i = 0; i < spans.length; i++){
//     spans[i].style.backgroundColor = '#71152d';
//     spans[i].style.marginLeft = '5px';
//     spans[i].style.padding = '5px 15px';
//     }

{/* <ol id="myOl">
//         <li><span>Apple</span></li>
//         <li><span>Orange</span></li>
//         <li><span>Pineapple</span></li>
//         <li><span>Pear</span></li>
//         <li><span>Cherry</span></li>
// </ol>  */}
// ol{
//     width: 450px;
//     color: white;
//     background-color: #e59fad;
//     font-family: Calibri, sans-serif;
//     font-size: 20px;
//     list-style-position: inside;
//     padding: 10px;}
// li{
//     background-color: #c45268;
//     margin: 10px;
//     padding: 5px 0 5px 11px;}
// span{
//     background-color: #71152d;
//     padding: 5px 15px;
//     margin-left: 5px;}
// 