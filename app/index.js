// console.log(document.body);

let formulario = document.querySelector('form'); // Cambiado para seleccionar el formulario en lugar de todos los inputs

// Imprime el formulario en la consola
console.log(formulario);

// Añade un event listener al formulario para el evento submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Previene el envío del formulario
    
    // Selecciona el primer input dentro del formulario y obtiene su valor
    let mail = formulario.querySelector('input').value;
    
    // Imprime el valor del input en la consola
    console.log(mail);
});