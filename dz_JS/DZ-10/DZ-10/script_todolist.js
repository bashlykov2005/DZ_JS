let myForm = document.forms.myForm
let listGroupItem = document.querySelectorAll(".list-group-item");
myForm.addEventListener("submit", function(){
    event.preventDefault();
    let title = document.querySelector("#name").value;

    document.querySelector(".tasks").innerHTML += `<li class="list-group-item"><span> ❌</span>${title}</li>`;
    listGroupItem = document.querySelectorAll(".list-group-item");
    localStorage.setItem("item", `${title}`);
    myForm.reset();
});
    document.querySelector(".tasks").addEventListener("click", function(){
        if (event.target.tagName == "SPAN") {
           event.target.parentElement.remove(); 
        } else if (event.target.tagName == "LI") {
        if (event.target.classList.contains("list-group-item-success")) {
            event.target.classList.remove("list-group-item-success");
        }
        else{
            event.target.classList.add("list-group-item-success");
        }  
        }
    });
document.querySelector("#myDelete").addEventListener ("click", function(){
    document.querySelector(".tasks").innerHTML = "";
 });

document.querySelector("#fs").addEventListener("click", function(){
    for( let i = 0; i < listGroupItem.length; i++){ 
        listGroupItem[i].style.fontSize = `${event.target.innerText}px`;
    }        
    // document.cookie = `fontSize = ${event.target.innerText}px`;
    localStorage.setItem("fontSize", `${event.target.innerText}px`);
});

document.querySelector("#cl").addEventListener("click", function(){
    for( let i = 0; i < listGroupItem.length; i++){ 
        listGroupItem[i].style.color = `${event.target.dataset.color}`;
    }
    // document.cookie = `color = ${event.target.dataset.color}`;
    localStorage.setItem("color", event.target.dataset.color);
}); 

document.querySelector("#bcl").addEventListener("click", function(){
    document.querySelectorAll(".list-group-item").forEach (v => v.style.backgroundColor = `${event.target.innerText}`);

    localStorage.setItem("backgroundColor", `${event.target.innerText}`);
}); 

document.addEventListener('DOMContentLoaded', function(){
    let listGroupItem = document.querySelectorAll(".list-group-item");
   for (const iterator of listGroupItem) {
    iterator.style.fontSize = localStorage.getItem("fontSize");
    iterator.style.color = localStorage.getItem("color");
    iterator.style.backgroundColor = localStorage.getItem("backgroundColor");
   }
    
});