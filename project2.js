var addBtn = document.getElementById('addBtn');
var clear = document.getElementById('clear');

addBtn.addEventListener('click', function(){
    var addNum1 = document.getElementById('addNum1').value;
  var addNum2 = document.getElementById('addNum2').value;
  var operators = document.getElementById('operators').value;

  if (operators === '+'){
    var addNum = document.getElementById('Res').value = Number(addNum1) + Number(addNum2);
  }
})

var subBtn = document.getElementById('subBtn');

subBtn.addEventListener('click', function(){
    var subNum1 = document.getElementById('subNum1').value;
    var subNum2 = document.getElementById('subNum2').value;
    var operators2 = document.getElementById('operators2').value;

    if (operators2 === '-'){
        var subNum = document.getElementById('Res').value = Number(subNum1) - Number(subNum2);
    }
})

var mulBtn = document.getElementById('mulBtn');

mulBtn.addEventListener('click', function multiply() {
  var mulNum1 = document.getElementById('mulNum1').value;
  var mulNum2 = document.getElementById('mulNum2').value;
  var operators3 = document.getElementById('operators3').value;


  if (operators3 === '*') {
    var mulNum2 = document.getElementById('Res').value = Number(mulNum1) * Number(mulNum2);
  }
})

clear.addEventListener('click', function clear() {
    addNum1.value = "";
    addNum2.value = "";
    document.getElementById('Res').value = "";
    subNum1.value = "";
    subNum2.value = "";
    mulNum1.value = "";
    mulNum2.value = "";
  })

var body = document.querySelector('body');
body.style.backgroundColor = 'red'

var addition = document.getElementById('addition');
addition.style.backgroundColor = 'blue';
addition.style.float ='left';
addition.style.marginLeft = '25px';

var subtraction = document.getElementById('subtraction');
subtraction.style.backgroundColor = 'purple';
subtraction.style.float = 'left';
subtraction.style.marginLeft = '25px';

var multiplication = document.getElementById('multiplication');
multiplication.style.backgroundColor = 'yellow';
multiplication.style.float = 'left';
multiplication.style.marginLeft = '25px';






  


