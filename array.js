var newElement = document.createElement('h1');
newElement.textContent = "Hello World";
document.body.appendChild(newElement)

for (let i = 0; i < 10; i++){
    var newElement = document.createElement('h1');
newElement.textContent = "Hello World";
document.body.appendChild(newElement);

newElement.style.color = "blue";
};


const names = ["steve", "larry", "shirley", "steph", "nate", "rick", "emily"];

var p = document.getElementById("p");
for (var i = 0; i < names.length; i++) {
    p.innerHTML = names
}
