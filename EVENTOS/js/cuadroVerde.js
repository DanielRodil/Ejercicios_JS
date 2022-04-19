
// Mensaje con las coordenadas del cursor dentro de la página 
function ejemplo2(evento) {
    console.log('evento = ', evento);
    console.log('evento.target = ', evento.target);
    alert('Hiciste click en coordenadas: ' + evento.clientX + ', ' + evento.clientY + ' con botón ' + evento.button);
}
// Nos informa de las coordenadas del cursor DENTRO de "elemento"
// offsetLeft devuelve el numero de pixeles a la izquierda del elemento actual 
function ejemplo3(evento) {
    // Event.target, es una referencia al objeto en el cual se lanzo el evento
    let elemento = evento.target;
    // propiedad Event.clientX, devuelve la coordenada horizontal del puntero del ratón
    // propiedad Event.clientY, devuelve la coordenada vertical del puntero del ratón
    // HTMLElement.offsetLeft, devuelve el numero de pixeles a la izquierda del elemento actual con respecto al nodo
    // HTMLElement.ooffsetTop, devuelve la distancia del elemento actual respecto al borde superior
    escribirEtiqueta(`Ahora estás en coordenadas:  ${(evento.clientX - elemento.offsetLeft)} , ${(evento.clientY - elemento.offsetTop)}`);
    console.log(elemento.offsetLeft, evento.clientX);
    
}
// Funciones auxiliares para mensajes en pantalla
function resetearEtiqueta() { escribirEtiqueta('Pincha en lo verde'); }
function escribirEtiqueta(texto) { document.querySelector('#texto').innerHTML = texto; }


// EVENTOS MEDIANTE PROPIEDADES ELEMENTOS HTML
// (Equivale a lo mismo que se ha hecho con los atributos html)
/*let capa = document.querySelector("div");
capa.onmousedown = function(event){ ejemplo2(event) };
capa.onmousemove = function(event){ ejemplo3(event, this) };
capa.onmouseleave = resetearEtiqueta; // Asignamos la función, NO la invocamos */