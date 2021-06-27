for(let i = 0; i < 5; i++){
    var ol = document.createElement('ul');
    var listItem1 = document.createElement('li');
    var head1 = document.createElement('h2');
    head1.textContent = 'Goodbye';
    ol.appendChild(listItem1);
    listItem1.appendChild(head1);
    document.body.appendChild(ol); 

   head1.style.fontSize = '20px';
   head1.style.fontWeight = 'lighter';
   head1.style.fontFamily = 'sans-serif';
   head1.style.color = 'cornflowerblue';
   
   head1.classList.add('border')
};