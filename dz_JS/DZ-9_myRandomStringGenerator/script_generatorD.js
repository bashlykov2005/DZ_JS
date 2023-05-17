// document.getElementById('myForm').addEventListener('submit', function(){
  document.forms.myForm.addEventListener('submit', function(){
    event.preventDefault();
    let count = document.querySelector('#count').value;
    let isNamber = document.querySelector('#isNamber').checked;
    let isUpper = document.querySelector('#isUpper').checked;
    let isLower = document.querySelector('#isLower').checked;
    let isSelect = document.querySelector('#isSelect').checked;
    
    let result = generationString(count, isNamber, isUpper, isLower, isSelect);
    // document.querySelector('#result').innerText = result;
    document.querySelector('#result').value = result; 
});
function Random (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
function myReset(){ 
  if (document.querySelector('#isNamber').checked || document.querySelector('#isUpper').checked || document.querySelector('#isLower').checked)
  document.querySelector('#isSelect').checked = false;
  document.querySelector('#myResult').hidden = true; 
  document.querySelector('#myResult').value = ''
}
function create () {
    document.querySelector('#isNamber').checked = false;
    document.querySelector('#isUpper').checked = false;
    document.querySelector('#isLower').checked = false;

    document.querySelector('#myResult').hidden = false; 
  // let ul = document.querySelector('ul');
  // let input = document.createElement("input");
  // input.setAttribute ("id", "type");
  //   input.type = "text";
  //   input.id = "myResult";
  //   ul.appendChild(input); 
}

function generationString(count, isNamber, isUpper, isLower, isSelect) {
    let str = "";
    let number = "1234567890";
    let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lower = "qwertyuioplkjhgfdsazxcvbnm";
    let myResult = document.querySelector('#myResult');
    let mySelect = myResult.value;

    if (isNamber == false && isUpper == false && isLower == false && isSelect == false) {
      return "Not selected"; 
    }
    if ((isNamber == true || isUpper == true || isLower == true) && isSelect == false) {
      for (let i = 0; i < count; ) {
        let random = Random(0, 3);
        if (random == 0 && isNamber) {
              str += number[Random (0, number.length)];
              i++
            } else if (random == 1 && isUpper) {
              str += upper[Random (0, upper.length)];
              i++
            } else if (random == 2 && isLower) {
              str += lower[Random (0, lower.length)];
              i++}
                }
              }
              if (isSelect == true && isNamber == false && isUpper == false && isLower == false) {
                for (let j = 0; j < mySelect.length; ){
                    str += mySelect[Random (0, mySelect.length)];
                    j++
                    } 
                  }
                  return str;
              }
