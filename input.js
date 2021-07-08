var form = document.getElementById('myForm');
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var age = document.getElementById('age');
var city = document.getElementById('city');
var btn = document.getElementById('btn');

btn.addEventListener('click', getRestrict)

function getRestrict(){
    var restrict = [];
    if (form.elements['eggs'].checked){
        restrict.push(document.getElementById('eggs').value)
    }
    if (form.elements['Milk'].checked){
        restrict.push(document.getElementById('Milk').value)
    }
    if (form.elements['Peanuts'].checked){
        restrict.push(document.getElementById('Peanuts').value)
    }

    var gender = form.elements["genderSelect"].value;
    var question = form.elements["question"].value;

    alert('First Name: ' + fName.value + ' \n Last Name: ' + lName.value + '\n Gender: ' + gender + '\n City: ' + city.value + '\n Dietary Restrictions: ' + restrict + '\n Have you ever shopped here before: ' + question)

}