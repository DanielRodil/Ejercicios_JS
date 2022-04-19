// vamos a establecer un listener para que este pendiente d ehacer algo

document.querySelector('#encabezado').addEventListener('click', function (event) {
    event.target.innerText = 'Otro curso';
    console.log('Objeto Event encabezado = ', event);
});

//eventos con el mouse

//variables
let encabezado = document.querySelector('#encabezado');
console.log('Variable encabezado = ', encabezado);
let enlaces = document.querySelectorAll('.enlace');
console.log('Variable enlaces = ', enlaces);
let boton = document.querySelector('#vaciar-carrito'); // linea 53 html es el boton de vaciar carrito
console.log('Variable boton = ', boton);



// al hacer click
boton.addEventListener('click', obtenerEvento);

// al hacer doble click
boton.addEventListener('dblclick', obtenerEvento);

// cuando el puntero del ratón se mueve sobre un elemento
boton.addEventListener('mouseenter', obtenerEvento); 

// cuando el puntero del rato
boton.addEventListener('mouseleave', obtenerEvento);

// al pasar el puntero del ratón por encima 
boton.addEventListener('mouseover', obtenerEvento);

// al quitar el puntero del ratón
boton.addEventListener('mouseout', obtenerEvento);

// al tener un botón del ratón presionado
boton.addEventListener('mousedown', obtenerEvento); 

// al soltar el botón del ratón
boton.addEventListener('mouseup', obtenerEvento); 

// al mover el ratón
encabezado.addEventListener('mousemove', obtenerEvento); 

function obtenerEvento(event) {
    console.log(`EVENTO: ${event.type}`); //
}
