//comprobar como esta el html linkado
//inspeccionar un card buscar agregar-carrito y ver en que clases esta sus padres

let card = document.querySelector('.card');
let infoCurso = document.querySelector('.info-card');
let agregarCarrito = document.querySelector('.agregar-carrito');
console.log('variable card = ', card);
console.log('variable infoCurso = ', infoCurso);
console.log('variable agregarCarrito = ', agregarCarrito);

// fijarse que aparece cuando hago click en agregar carrito hace que se propague hacia arriba, hacer la prueba clicando solo sobre la imagen
card.addEventListener('click', function () {
    console.log('Click en Card');
})

infoCurso.addEventListener('click', function () {
    console.log('Click en info Curso');
})

agregarCarrito.addEventListener('click', function () {
    console.log('Click en Agregar carrito');
}) 

// para parar la propagación hay quie poner la event.stopPropagation();
/* card.addEventListener( 'click', function (event) {
    console.log('Click en Card');
    event.stopPropagation();
} )

infoCurso.addEventListener( 'click', function (event) {
    console.log('Click en info Curso');
    event.stopPropagation();
} )

agregarCarrito.addEventListener( 'click', function (event) {
    console.log('Click en Agregar carrito');
    event.stopPropagation();
} ) */