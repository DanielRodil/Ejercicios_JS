// numeros en javaScript
const NUM1 = 30,
      NUM2 = 20,
      NUM3 = 20.20,
      NUM4 = .1020,
      NUM5 = -3;

let resultado;
//suma
resultado = NUM1 + NUM2;
console.log('suma = ', resultado);
//resta
resultado = NUM1 - NUM2;
console.log('resta = ', resultado);
//multiplicar
resultado = NUM1 * NUM2;
console.log('multiplicacion = ', resultado);
//dvision
resultado = NUM1 / NUM2;
console.log('division = ', resultado);
//modulo
resultado = NUM1 % NUM2;
console.log('modulo = ', resultado);
//pi
resultado = Math.PI;
console.log('resultado = ', resultado);
// truncamiento
resultado = Math.trunc(1.26584);
console.log('truncamiento = ', resultado);
// redondeo, a partir de 5 valor superior
resultado = Math.round(2.5);
console.log('rendondeo = ', resultado);
resultado = Math.round(2.4);
console.log('rendondeo = ', resultado);
//redondeo controlado 
resultado = Math.ceil(2.1); // redondeo superior 3
console.log('redondeo superior (ceil) ' + resultado);
resultado = Math.floor(2.99); // redondeo inferior 2
console.log('redondeo inferior (flor) ' + resultado);
//raiz cuadrada
resultado = Math.sqrt(144);
console.log('raiz cuadrada 144 = ', resultado);
//absoluto
resultado = Math.abs(NUM5);
console.log('valor absoluto NUM5 = ', resultado);
//potencia (base, exp)
resultado = Math.pow(2, 4);
console.log('2 elevado a 4 = ', resultado);
//min max
resultado = Math.min(3,6,5,4,9,8,7,0);
console.log('valor min = ', resultado);
resultado = Math.max(3,6,5,4,9,8,7,0);
console.log('valor max = ', resultado);
//aleatorio float [0,1)
resultado = Math.random();
console.log('valor aleatorio = ', resultado);
resultado = Math.floor(Math.random() * 5);
console.log('valor aleatorio 0 - 5 = ', resultado);
resultado = Math.floor(Math.random() * 5) + 1;
console.log('valor aleatorio 1 - 5 = ', resultado);

let pruebaNumero;
pruebaNumero = 10
console.log('pruebaNumero = ', pruebaNumero);

pruebaNumero ++;
console.log('pruebaNumero = ', pruebaNumero);

++ pruebaNumero
console.log('pruebaNumero = ', pruebaNumero);

// pruebaNumero += 15; pruebaNumero = pruebaNumero + 15;
pruebaNumero += 15;
console.log('pruebaNumero = ', pruebaNumero);

console.log('++pruebaNumero = ', ++pruebaNumero); // primero incrementa y luego lo muestra su valor
console.log('pruebaNumero++ = ', pruebaNumero++); // primero muestra el valor del número y luego lo incrementa
console.log('pruebaNumero = ', pruebaNumero);

// Infinity
let x =  2 / 0;
let y = -2 / 0;
console.log('x = ', x);
console.log('y = ', y);


// NaN (Not a Number)
// El operador '=' asignación 
let num = 100 / "Apple"
console.log('num = ', num);

// Las siguientes operaciones, contra toda lógica, son falsas
// El operador '==' compara valores
// El operador '===' compara valores y tipo
console.log('¿num es NaN?', num == NaN); // false
console.log('¿num es NaN?', num === NaN); // false

// SE DEBE USAR Number.isNaN() ó isNaN() para comprobar si el valor es NaN
console.log('¿num es NaN?', Number.isNaN(num)); // true
console.log('¿num es NaN?', isNaN(num)); // true

// Si comprobamos el tipo de dato de NaN, nos dirá que es numérico
console.log('¿De que tipo es num?', typeof num); // number
console.log('¿De que tipo es NaN?', typeof NaN); // number
console.log('¿NaN es un objeto Number?', NaN instanceof Number); // false, es un dato primitivo

