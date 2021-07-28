var time = document.getElementById("time");
var list = document.getElementById("list");
var add = document.getElementById("add");
var ul = document.getElementById("ulList");

add.addEventListener("click", function(e){
   e.preventDefault();

    var p = document.createElement("p")
    p.innerHTML = time.value 

    ul.appendChild(p)
    
    var p2 = document.createElement("p");
    p2.innerHTML = list.value

    ul.appendChild(p2)

    var trash = document.createElement("button");
    trash.innerText = "delete"

    ul.appendChild(trash)

    time.value = ""
    list.value = ""

    trash.addEventListener("click", function(){
        ul.removeChild(p);
        ul.removeChild(p2);
        ul.removeChild(trash);
    })
})



