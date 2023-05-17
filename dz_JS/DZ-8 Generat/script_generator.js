document.getElementById('myForm').addEventListener('submit', function(){
    event.preventDefault();
    let count = document.querySelector('#count').value;
    let isNamber = document.querySelector('#isNamber').checked;
    let isUpper = document.querySelector('#isUpper').checked;
    let isLower = document.querySelector('#isLower').checked;

    let result = generationString(count, isNamber, isUpper, isLower);
    // document.querySelector('#result').innerText = result;
    document.querySelector('#result').value = result;
})
function Random (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
function generationString(count, isNamber, isUpper, isLower) {
    let str = "";
    let number = "1234567890";
    let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lower = "qwertyuioplkjhgfdsazxcvbnm";

    if (isNamber == false && isUpper == false && isLower == false) {
      return "Not selected"; 
    }
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
            i++
    }
}
return str;
}

