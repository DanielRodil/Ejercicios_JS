// INPUTS
// seleccionar el input de la linea 70 del HTML
let busqueda = document.querySelector('#buscador');
console.log('Variable busqueda = ', busqueda);

// keydown cuando el usuario presiona una tecla
// busqueda.addEventListener('keydown', obtenerEvento);

//keyup cuando soltamos la tecla
busqueda.addEventListener('keyup', obtenerEvento);

//key press 
//busqueda.addEventListener('keypress', obtenerEvento);

function obtenerEvento(event) {
    console.log(busqueda.value)// devuelve lo que el ususario tenga escrito en el buscador
    console.log(`EVENTO: ${event.type}`);
} 


// key press 
busqueda.addEventListener('keypress', obtenerEvento2);

function obtenerEvento2(event) {
    document.querySelector('.encabezado').innerText = busqueda.value; 
    console.log(`EVENTO: ${event.type}`);
} 

// FOCUS
busqueda.addEventListener('focus', obtenerEvento3); // se activa cada vez nos posicionamos en el input


// BLUR  => avisa cuando se sale del formulario
busqueda.addEventListener('blur', obtenerEvento3); 

// CUT
busqueda.addEventListener('cut', obtenerEvento3); // si alguien le da a cortar en el input 

// COPY
busqueda.addEventListener('copy', obtenerEvento3);

// PASTE
busqueda.addEventListener('paste', obtenerEvento3);

// input TODO EN UNO ==> todo lo anterior lo coge como input
busqueda.addEventListener('input', obtenerEvento3);

// CHANGE
busqueda.addEventListener('change', obtenerEvento3); // por ejemplo sería en un select para registrar los cambios


function obtenerEvento3(event) {
    console.log(`EVENTO: ${event.type}`);
} 