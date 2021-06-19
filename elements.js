var newElement = document.createElement('h1');
newElement.textContent = 'Welcome to my JS site';
document.body.appendChild(newElement);

var newP = document.createElement('p');
newP.textContent = 'All of this was created with Javascript';
document.body.appendChild(newP);

var ol = document.createElement('ol');
var listItem1 = document.createElement('li');
var listItem2 = document.createElement('li');
var listItem3 = document.createElement('li');
listItem1.textContent = 'apple'
listItem2.textContent = 'banana'
listItem3.textContent = 'orange'
ol.appendChild(listItem1);
ol.appendChild(listItem2);
ol.appendChild(listItem3);
document.body.appendChild(ol);

