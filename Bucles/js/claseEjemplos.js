// FOR()
for(let i = 0; i < 10; i++){
    console.log(`FOR ==> Numero:  ${ i }`);
}

// WHILE() 
let i = 0;
while(i < 10) { 
    console.log(`WHILE ==> Numero ${ i }`);
    i++;
}

// DO WHILE()
do {
    console.log(`DO WHILE ==> Numero ${ i }`);
    i++;
} while(i < 20);

// FOREACH()
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numeros.forEach(numero => console.log(`FOREACH==>Numero:  ${ numero }`));
numeros.forEach(function(numero){
    console.log(`FOREACH ==> Numero:  ${ numero }`);
});

// ARRAY.MAP()
const CARRITO = [
    {id: 1, producto: 'sandia'},
    {id: 2, producto: 'pera'},
    {id: 3, producto: 'manzana'},
    {id: 4, producto: 'melon'}
];
// FUNCIÓN ANONIMA
/* const NOMBREPRODUCTO = CARRITO.map(function(CARRITO){       // NOMBREPRODUCTO es un array con los valores de la clave producto
    return CARRITO.producto
}); */
// ARROW FUNCTION
const NOMBREPRODUCTO = CARRITO.map((CARRITO)=> { return CARRITO.producto; });
console.log('ARRAY NOMBREPRODUCTO = ', NOMBREPRODUCTO);
console.log('ARRAY NOMBREPRODUCTO toString() = ', NOMBREPRODUCTO.toString());

// ITERADORES
const automovil = {
    modelo: 'Mondeo',
    motor: 2000,
    anio: 2008,
    marca: 'Ford'
}

// FOR IN (Itera sobre las propiedades de un objeto)
for( let propiedad in automovil){
    console.log(`Propiedad: ${propiedad} ==> Valor: ${automovil[propiedad]}`);
}


// ARRAY, SET, MAP
let pueblos = ['Ventajudinos', 'Hospital', 'Hoyo de Manzanares', 'Torrelodones'];
// el SET no tiene clave:valor ==> El objeto Set te permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u objetos de referencia.
let ordenes = new Set([123, 231, 131, 102]);
let datos = new Map();
datos.set('nombre', 'Juan');
datos.set('profesión', 'mis asuntos');

console.log('Array pueblos = ', pueblos);
console.log('Set ordenes = ', ordenes);
console.log('Map datos = ', datos);

// entries() método que devuelve clave:valor
for (let element of pueblos.entries()){
    console.log('Entrada Array = ', element);
}
// values() método que devuelve el valor
for (let element of pueblos.values()){
    console.log('Valor Array = ', element);
}

for (let element of ordenes.entries()){
    console.log('Entrada Set = ', element);
}
for (let element of ordenes.values()){
    console.log('Valor Set = ', element);
}

for (let element of datos.entries()){
    console.log('Entrada Map =', element);
}
for (let element of datos.values()){
    console.log('Valor Mapa = ', element);
}

// keys() método que devuelve la clave
for (let element of pueblos.keys()){
    console.log('Valor keys Array = ', element);
}

for (let element of ordenes.keys()){
    console.log('Valor Set = ', element);
}

for (let element of datos.keys()){
    console.log('Valor Map = ', element);
}

// Default
for (let element of pueblos){
    console.log('Valor Default Array = ', element);
}

for (let element of ordenes){
    console.log('Valor Default Set = ', element);
}

for (let element of datos){
    console.log('Valor Default Map = ', element);
}

// Iterar cadena de caracteres
let mensaje = 'Hasta los ... del curso';
for (let letra of mensaje){
    console.log('letra = ', letra);
}

// Recorrer las etiquetas <a> del html
let enlaces = document.getElementsByTagName('a');
for(let element of enlaces){
    console.log('Link = ', element.href)
}


