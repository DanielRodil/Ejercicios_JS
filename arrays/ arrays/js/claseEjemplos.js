// ARRAYS
// Crear ARRAYS con literales
const NUMEROS = [10, 20, 30, 40, 50];
console.log('Array de NUMEROS = ', NUMEROS);
console.log('Array de NUMEROS = ', NUMEROS.toString());

// Con el constructor
let meses = new Array("Enero", "Febrero", "Marzo", "Abril");
console.log('Array meses = ', meses);

// Array mixto (diferentes tipos de datos)
const MEZCLA = ["Hola", true, 20, null, undefined];

console.log('Array MEZCLA = ', MEZCLA);

// Metodos
console.log(meses.length); // número de elementos
console.log('¿meses es un array? ', Array.isArray(meses)); // ¿es un array?
console.log(meses[1]); // Muestra el segundo elemento del array
meses[4] = "Mayo"; 
console.log('meses = ', meses);
meses.push("Junio"); // add al final del array
console.log('Array meses = ', meses);

// encontrar un elemento del array
console.log(meses.indexOf("Abril")); // devuelve el índice del elemento

// añadir al inicio del array
meses.unshift("Mes 0"); // añade el elemento al principio del array
console.log('Array meses = ', meses);

// eleminar un elemento del array
meses.pop(); // elimina y devuelve el último elemento
console.log('Array meses = ', meses);
meses.shift(); // elimina y devuelve el primer elemento
console.log('Array meses = ', meses);
meses.splice(2, 1); //quitar del array el de la posicion 2 y cuantos más
console.log('Array meses = ', meses);

// revertir array
meses.reverse();
console.log('Array meses = ', meses);

// unir arrays
let meses2 = ["Julio", "Agosto"];
console.log(meses.reverse().concat(meses2));

// ordenar un array
const frutas = ["Platano", "Fresas", "Manzana", "Pera", "Naranja"];

console.log(frutas.sort());
console.log(frutas.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)));

// ordenar array number
meses = [10, 2, 1, 13, 12, 11];
console.log(meses.sort()); //OJO

/*meses.sort(function(x, y) {
    return x-y;
});*/

meses.sort((a, b) => a - b);
console.log('Array meses = ', meses);


let frutas2 = ["mango", "limon"];
frutas2.push(...frutas); // con el parámetro ... indico que el array frutas puede tener 0 o mas elementos
console.log('Array frutas2 = ', frutas2);
