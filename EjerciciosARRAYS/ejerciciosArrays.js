// EJERCICIOS ARRAYS
// CUANDO MUESTRE LOS RESULTADOS POR CONSOLA DEBE APARECER AL PRINCIPIO EL TEXTO 'EJERCICIO NUM --> '
// EN TODOS LOS EJERCICIOS DEBE MOSTRAR EL RESULTADO POR CONSOLA

// 1. CREE UN ARRAY VACIO Y COMPRUEBE SU LONGITUD
console.log('ejercicio num 1');
const EMPTY = [];
console.log(EMPTY);
console.log('la longitud del array vacío es ' + EMPTY.length);
// 2. CREE UN ARRAY CON UN UNICO ELEMENTO
console.log('ejercicio num 2');
const UNICO = [1];
console.log(UNICO);
// 3. CREE UN ARRAY MIXTO Y MUESTRE SU CONTENIDO COMO UNA CADENA DE CARACTERES SEPARADAS POR COMAS 
console.log('ejercicio num 3');
const MIXTO = ['A', 23, true];
console.log(MIXTO);
console.log(MIXTO.toString());
// 4. CREE UN ARRAY CUYOS ELEMENTOS SEAN LOS ARRAYS CREADOS ANTERIORMENTE Y MUESTRE SU CONTENIDO Y LONGITUD 
console.log('ejercicio num 4');
const ARRAYDEARRAYS = [EMPTY, UNICO, MIXTO];
console.log(ARRAYDEARRAYS);
console.log(ARRAYDEARRAYS.length);
// 5. DADO EL SIGUIENTE ARRAY, UTILIZANDO LA PROPIEDAD LENGTH, MUESTRE EL ULTIMO ELEMENTO
const CARS = ["Saab", "Volvo", "BMW"];
console.log('ejercicio num 5');
console.warn("PENDIENTE");
// 6. EN EL ARRAY ANTERIOR, AÑADA UN ELEMENTO AL FINAL, OTRO AL PRINCIO, MUESTRE EL RESULTADO Y LA LONGITUD DEL ARRAY
console.log('ejercicio num 6');
CARS.push("Ford");
CARS.unshift("Seat");
console.log(CARS);
console.log("la longitud del array es: " + CARS.length);
// 7. A PARTIR DE LOS ARRAYS DE LOS EJERCICIOS 2 Y 3, CREE UN NUEVO ARRAY
console.log('ejercicio num 7');
const UNICOMIXTO = UNICO.concat(MIXTO);
console.log(UNICOMIXTO);
// 8. EN EL ARRAY RESULTANTE DEL EJERCICIO ANTERIOR, ELIMINE EL PRIMER Y ULTIMO ELEMENTO, MUESTRE EL RESULTADO, ADEMAS DEBE APARACER SU LONGITUD
console.log('ejercicio num 8');
UNICOMIXTO.shift();
UNICOMIXTO.pop();
console.log(UNICOMIXTO);
console.log(" longitud: " + UNICOMIXTO.length);
// 9. A PARTIR DE LA SIGUIENTE CADENA DE TEXTO 'CURSO XLIV' CREE UN ARRAY QUE CONTENGA SOLAMENTE COMO ELEMENTOS LOS CARACTERES DE LAS LETRAS
console.log('ejercicio num 9');
const CURSOXLIV = "CURSO XLIV".split("");
console.log(CURSOXLIV);
// 10. EN EL ARRAY ANTERIOR, INSERTE COMO ELEMENTOS DE DICHO ARRAY LOS CARACTERES DE LA PALABRA 'DIM' (para que estén detrás del caracter O de CURSO y antes del
// caracter X de XLIV). 
console.log('ejercicio num 10');
const DIM = "DIM".split("");
const CURSODIMXLIV = CURSOXLIV.splice(5, 0, "D", "I", "M");
console.log(CURSODIMXLIV);
// 11. CREE UN ARRAY A PARTIR DE LA SIGUIENTE CADENA DE TEXTO 'Hoyo de Manzanares, 15 de abril de 2023', DE TAL MANERA QUE LOS ELEMENTOS SEAN
// LA CIUDAD, EL DIA, EL MES Y EL AÑO
console.log('ejercicio num 11');
const HOYO = 'Hoyo de Manzanares, 15 de abril de 2023'.split("");
//console.log(HOYO);
const ARRAYCIUDAD = HOYO.slice(0, 18).join("");
const ARRAYDIA = HOYO.slice(20, 22).join("");
const ARRAYMES = HOYO.slice(26, 31).join("");
const ARRAYANYO = HOYO.slice(35, 39).join("");
//console.log(ARRAYCIUDAD);
//console.log(ARRAYDIA);
//console.log(ARRAYMES);
//console.log(ARRAYANYO);
const ARRAYCIUDADDIAMESANYO = [ARRAYCIUDAD, ARRAYDIA, ARRAYMES, ARRAYANYO];
console.log(ARRAYCIUDADDIAMESANYO);
// 12. UTILIZANDO UN METODO DE BUSQUEDA, EN EL ARRAY ANTERIOR, MUESTRE LA POSICION QUE OCUPA EL ELEMENTO 15
console.log('ejercicio num 12');
console.log(ARRAYCIUDADDIAMESANYO.indexOf("15"));
// 13. ORDENE DE FORMA DESCENDENTE EL SIGUIENTE ARRAY
const array = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"];
console.log('ejercicio num 13');
console.log(array.reverse());
// 14. ORDENE EL SIGUIENTE ARRAY
const array1 = [1, 30, 4, 21, 100000];
console.log('ejercicio num 14');
console.log(array.sort());

// UTILIZANDO FUNCIONES DE ARRAYS:
// 15. RECORRA EL ARRAY Y SUMELE 1 A CADA ELEMENTO
const array2 = [5, 10, 15, 20, 25];
console.log('ejercicio num 15');
const array3 = array2.map(element => element + 1);
console.log(array3);
// 16. COMPRUEBE SI TODOS LOS ELEMENTOS DEL ARRAY ANTERIOR SON IMPARES
console.log('ejercicio num 16');
let todosimpares = array2.every((element) => (element % 2) != 0);
console.log(todosimpares);
// 17. COMPRUE SI AL MENOS EXISTE UN ELEMENTO DEL ARRAY DEL EJERCICIO 16 QUE SEA PAR
console.log('ejercicio num 17');
let algunpar = array2.some((element) => (element % 2) == 0);
console.log(algunpar);
// 18. A PARTIR DEL ARRAY DEL EJERCICIO 15, CREE UN NUEVO ARRAY QUE CONTENGA SOLO LOS NUMEROS IMPARES
console.log('ejercicio num 18');
const array4 = array3.filter((element) => (element % 2) != 0);
console.log(array4);
// 19. A PARTIR DEL ARRAY DEL EJERCICIO 15, CREE UN NUEVO ARRAY QUE CONTENGA COMO ELEMENTOS, EL RESULTADO DE REALIZAR LA RAIZ CUADRADA A CADA ELEMENTO
console.log('ejercicio num 19');
const array5 = array2.map((element) => Math.sqrt(element));
console.log(array5);
// 20. TOMANDO COMO REFERENCIA EL ARRAY DEL EJERCICIO 15, MUESTRE POR PANTALLA LA SUMA DE TODOS SUS ELEMENTOS
console.log('ejercicio num 20');
const sumaArray2 = array2.reduce((p, e) => p + e);
console.log(sumaArray2); 
// 21. DADO EL SIGUIENTE ARRAY, CREE UNA COPIA SUPERFICIAL Y COMPRUEBE QUE LO HA REALIZADO CORRECTAMENTE
const EQUIPOS = ['R. MADRID', 'R. BETIS', 'ATH BILBAO', 'ATH MADRID'];
console.log('ejercicio num 21');
const copiaSuperficialEquipos = Array.from(EQUIPOS);
console.log(copiaSuperficialEquipos);
EQUIPOS[0] = "SPORTING";
console.log(copiaSuperficialEquipos);

