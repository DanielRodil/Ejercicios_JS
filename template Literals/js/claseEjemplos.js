let producto = 'chuletón',
      precio1 = 30,
      producto2 = 'vino',
      precio2 = 40;

let html;

// Método clásico
/* html =  '<ul>' +
         '<li>Producto: ' + producto + '</li>' +
         '<li>Precio: ' + precio1 + '</li>' +
         '<li>Producto: ' + producto2 + '</li>' +
         '<li>Precio: ' + precio2 + '</li>' +
         '<li><strong>Precio Total: ' + (precio1 + precio2) + '</strong></li>' +
         '</ul>';
console.log('html = ', html);
document.getElementById('app').innerHTML = html; */

// TEMPLATE LITERALS
// EJEMPLO 1 
html = `<ol>  
            <li> ${ producto } </li>
            <li> ${ precio1 } </li>
            <li> ${ producto2 } </li>
            <li> ${ precio2 } </li>
            <li><strong> Precio Total: ${ total(precio1, precio2) } </strong></li>
        </ol>`;

function total(precio1, precio2) {
    return precio1 + precio2;
}

console.log('html = ', html);
document.getElementById('app').innerHTML = html;

// EJEMPLO 2
let nombre = prompt('Nombre: ');
let equipo = prompt('¿Cuál es su equipo de fútbol preferido? ');
let saludo = `Hola ${nombre} <br>
¡¡ VIVA EL ${equipo} !!`;
document.getElementById('saludo').innerHTML = saludo;
console.log('saludo = ', saludo);
