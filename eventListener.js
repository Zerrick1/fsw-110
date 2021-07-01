var square = document.getElementById("square");

window.addEventListener('load', () => {
    square.style.backgroundColor = 'black'
})

square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'green'
})
square.addEventListener('mousedown', () => {
    square.style.backgroundColor = 'yellow'
})

square.addEventListener('mouseup', () => {
    square.style.backgroundColor = 'blue'
})

square.addEventListener('dblclick', () => {
    square.style.backgroundColor = 'red'
})

window.addEventListener('wheel', () => {
    square.style.backgroundColor = 'purple'
});

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == '82') {
    square.style.backgroundColor = 'red';
  } if (key.keyCode == '71') {
    square.style.backgroundColor = 'green';
  } if (key.keyCode == '89') {
    square.style.backgroundColor = 'yellow';
  } if (key.keyCode == '66') {
    square.style.backgroundColor = 'blue';
  } if (key.keyCode == '80') {
    square.style.backgroundColor = 'purple';
  }
};
