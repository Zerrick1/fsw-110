var newElement = document.createElement('h1');
newElement.textContent = 'Welcome to my JS site';
document.body.appendChild(newElement);

var newP = document.createElement('p');
newP.textContent = 'All of this was created with Javascript';
document.body.appendChild(newP);

var newList = document.createElement('li');
newList.textContent = 'Chicken'
var ourList = document.getElementById('myList');
ourList.appendChild(newList);