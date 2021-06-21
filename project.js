var nav = document.createElement('NAV');
var home = document.createElement('a');
var about = document.createElement('a');

home.textContent = 'Home';
home.style.padding = '30px';

about.textContent = 'About';
about.style.padding = '30px';

document.body.appendChild(nav);
document.body.appendChild(about);
document.body.appendChild(home);

var h1 = document.createElement('h1');
h1.textContent = 'Hello';
document.body.appendChild(h1);

var p = document.createElement('p');
p.textContent = 'How is your day?';
document.body.appendChild(p);

var ol = document.createElement('ol');
var newItem1 = document.createElement('li');
var newItem2 = document.createElement('li');
var newItem3 = document.createElement('li');
newItem1.textContent = 'Water';
newItem2.textContent = 'Juice';
newItem3.textContent = 'Soda';
ol.appendChild(newItem1);
ol.appendChild(newItem2);
ol.appendChild(newItem3);
document.body.appendChild(ol);

var footer = document.createElement('footer');
footer.textContent = 'This is the end';
document.body.appendChild(footer);





