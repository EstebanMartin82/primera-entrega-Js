// console.log(document.body);

let formulario = document.querySelector('form'); 


console.log(formulario);

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let mail = formulario.querySelectorAll('input');
    mail.forEach(function(input) {
    
        console.log(input.value);
    });
});
