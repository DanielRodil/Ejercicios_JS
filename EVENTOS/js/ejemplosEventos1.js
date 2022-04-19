
/* document.querySelector(".btn-success").onclick = function (event) {
    console.log(event.default)
    document.querySelector('#demo2').innerHTML = Date()
} */

// Event Listeners
// con función anónima
/* document.querySelector(".btn-success").addEventListener('click', function (event) {
    document.querySelector('#demo2').innerHTML = Date()
}); */


// Otra foma, creando la funcion fuera

document.querySelector(".btn-success").addEventListener('click', ejecutarBoton);

function ejecutarBoton(event) {
    let elemento;
    document.querySelector('#demo2').innerHTML = Date();
    elemento = event; //ver LA INFORMACION QUE DEVUELVE DEL EVENTO DEL RATON EN LA CONSOLA
    console.log('Objeto Event = ',  elemento);
    elemento = event.target // devuelve donde he hecho click
    console.log('Objeto Target (donde se ha desencadenado el evento) = ',  elemento);
    elemento = event.target.className// devuelve las clases
    console.log('Clases del elemento = ',  elemento);
    elemento = event.target.innerText;// devuelve el texto que hay
    console.log('Contenido de texto del elemento = ',  elemento);
}




