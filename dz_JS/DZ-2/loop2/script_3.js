// triangle

var text="";
for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
            text+="  "
    }
    for (let j = 0; j < 2 * i + 1; j++) {
                  text+="* "
          }
    text+='\n';
}
console.log(text);
console.log(" "); 

var str="";
var z = 18
for (let j = 0; j < 10; j++) {
  for (let i = 0; i < 19; i++){
    str+=" "
    if (i >= z) {
        str+="*"
    }
  }
  z-=2;
    str+='\n';
}
console.log(str);
console.log(" "); 

// *
// **
// ***

var text="";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i+1; j++) {
            text+="*"
    }
    text+='\n';
}
console.log(text);
console.log(" "); 

// ***
// **
// *

var text="";
for (let i = 0; i < 11; i++) {
    for (let j = i+1; j < 11; j++) {
            text+="*"
    }
    text+='\n';
}
console.log(text);
console.log(" "); 

// line \ 

var text="";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
      text+="  "
    }
    for (let j = 0; j < (i + 1) - i; j++) {
            text+="*"
    }
    text+='\n';
}
console.log(text);
console.log(" "); 

var str="";
var z = 0
for (let j = 0; j < 10; j++) {
  for (let i = 0; i < 10; i++){
    str+="  "
    if (i == z) {
        str+="* "
    }
  }
  z++;
    str+='\n';
}
console.log(str);
console.log(" "); 


// line /

var text="";
for (let i = 0; i < 11; i++) {
    for (let j = i+1; j < 11; j++) {
            text+="  "
    }
    for (let j = 0; j < (i + 1) - i; j++) {
        text+="*"
    }
    text+='\n';
}
console.log(text);
console.log(" "); 

var str="";
var z = 9
for (let j = 0; j < 10; j++) {
  for (let i = 0; i < 10; i++){
    str+="  "
    if (i == z) {
        str+="* "
    }
  }
  z--;
    str+='\n';
}
console.log(str);
console.log(" "); 

// romb

var text="";
for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
            text+="  "
    }
    for (let j = 0; j < 2 * i + 1; j++) {
                  text+="* "
          }
    text+='\n';
}
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < i + 1; j++) {
            text+="  "
    }
    for (let j = i + 1; j < 1 - i; j++) {
      text+="* "
}
  text+='\n';
}
console.log(text);
console.log(" "); 
console.log(" "); 

var str="";
var z = 18
for (let j = 0; j < 9; j++) {
  for (let i = 0; i < 19; i++){
    str+=" "
    if (i >= z) {
        str+="*"
    }
  }
  z-=2;
    str+='\n';
}
var z = 0
for (let j = 0; j < 10; j++) {
  for (let i = 0; i < 19; i++){
    str+=" "
    if (i >= z) {
        str+="*"
    }
  }
  z+=2;
    str+='\n';
} 
console.log(str);
console.log(" "); 

// square

var text="";
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 5; j++) {
            text+=" * "
    }
    text+='\n';
}
console.log(text);
console.log(" "); 
console.log(" "); 

// square

var text="";
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 15; j++) {
        if (i==0 || i==8 || j==0 || j==14) {
            text+="*"
        } else{
            text+=" "
        }
    }
    text+='\n';
}
console.log(text);