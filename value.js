var form = document.getElementById('myForm');
var input1 = document.getElementById('fName');
var input2 = document.getElementById('mName');
var input3 = document.getElementById('lName');

form.addEventListener('submit', () =>{
    alert('First Name: ' + input1.value + " \n Middle Name: " + input2.value + " \n Last Name: " + input3.value)
})
