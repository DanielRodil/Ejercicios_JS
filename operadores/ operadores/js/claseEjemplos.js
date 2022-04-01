let numero1 = 20,
    numero2 = '50', // string
    numero3 = '20', // string
    numero4 = 3,
    resultado;

// OPERADORES ARITMETICOS
// El módulo %, ES EL RESTO DE LA DIVISION 
resultado = numero1 % numero4;
console.log('El módulo de 20 : 3 = ', resultado);
// 
console.log('numero4 = numero4 + 1 = ', ++numero4);
console.log('numero4 = numero4 + 1 = ', numero4++); // primero muestra la variable por la consola y después realiza la operación
console.log('el numero4 = ', numero4);
// x+=y equivale a x = x + y
console.log('numero1 = ', numero1);
console.log('numero4 = ', numero4);
console.log('numero1 += numero4;  = ', numero1 += numero4);
numero1 = 20;
console.log('numero1 = numero1 + numero4; = ', numero1 = numero1 + numero4);

// OPERADORES DE COMPARACION
// JavaScript utiliza la tabla UNICODE para representar caracteres
// tabla UNICODE (https://unicode-table.com/es/#basic-latin)
// EL VALOR UNICODE = POSICION QUE OCUPA EN LA TABLA
// 
console.log('tipo de dato de numero1 = ', typeof(numero1));
// charCodeAt() devuelve un numero indicando el valor Unicode del caracter en el indice proporcionado
console.log('valor de numero1 = ', String(numero1).charCodeAt(0));
console.log('tipo de dato de numero2 = ', typeof(numero2));
console.log('valor de numero2 = ', numero2.charCodeAt(0));
resultado = numero1 > numero2;
console.log('¿numero1 es mayor que numero2? ', resultado);
resultado = numero1 < numero2;
console.log('¿numero1 es menor que numero2? ', resultado);

// comparador de igualdad
// el operador == solo compara valor
resultado = numero1 == numero3;
console.log('¿numero1 es igual que numero2?', resultado);
// el operador === compara valor y tipo
resultado = numero1 === numero2;
console.log('¿numero1 es igual y mismo tipo que numero2?', resultado);

// Distinto
console.log('¿2 es distinto de 3', 2 != 3);

// Operador ternario
console.log('Operador ternario ¿2 es distinto de 3? ', 2 != 3 ? 'SI' : 'NO');

// COMPARAR CADENAS DE TEXTO O LETRAS
// EL VALOR UNICODE = POSICION QUE OCUPA EN LA TABLA
// ...NUMEROS...ABCDEF.....abcdef...
console.log('Hola es igual a HOla', 'HOLA' == ' HOla');
console.log('¿a es mayor que b?', 'a' > 'b');
console.log('Valor UNICODE de a = ', 'a'.charCodeAt());
console.log('Valor UNICODE de b = ', 'b'.charCodeAt());
console.log('¿a es mayor que A?', 'a' > 'A');
console.log('Valor UNICODE de a = ', 'a'.charCodeAt());
console.log('Valor UNICODE de A = ', 'A'.charCodeAt());

console.log('¿null es igual que undefined?', null == undefined); //true
console.log('¿null es igual y del mismo tipo que undefined?', null === undefined); // false

// CONVERTIR A STRING
let num1 = "50",
    num2 = 10,
    num3 ='tres';

console.log('1 + 2 = ', 1 + 2);
// El operador +
// cuando los operandos son números realiza la suma
// cuando los operandos son cadenas de texto, concatena
console.log('Java' + 'Script')
resultado = num1 + num2;
console.log('"50" + 10 = ', resultado); // ojo que devuelve un string
console.log('El tipo de dato de la operacion anterior = ', typeof(resultado)); 
resultado = Number(num1 + num2); // es un number
console.log('Number("50" + 10) = ', resultado);
console.log('El tipo de dato de la operacion anterior = ', typeof(resultado)); 
// parseInt() convierte un string a entero
resultado = parseInt(num1) + num2;
console.log('paretInt("50") + 10 = ', resultado);
console.log('"50" - 10 = ', num1 - num2); //¿porque hace esto? Porque con el más interpreta que tiene que concatenar

console.log('"50" es de tipo = ', typeof num1);
console.log('parseInt("50") devuelve un tipo de dato = ', typeof parseInt(num1));

console.log('"tres" es de tipo = ', typeof num3);
console.log('parseInt("tres") devuelve = ', parseInt(num3), ' y es de tipo = ', typeof parseInt(num3)); // NaN
console.log('Number("tres") devuelve = ', Number(num3), ' y es de tipo = ', typeof Number(num3)); // NaN


 // más ejemplos
console.log('Number("20") = ', Number("20"));
console.log('Number("20.10931") = ', Number("20.10931"));
console.log('Number(true) = ', Number(true)); // devuelve 1
console.log('Number(false) = ', Number(false)); // devuelve 0
console.log('Number(undefined) = ', Number(undefined)); // devuelve NaN
console.log('Number("hola") = ', Number("hola")); // devuelve NaN
console.log('Number([1, 2, 3]) = ', Number([1, 2, 3])); // devuelve NaN

// parseInt() convierte un string a number
// parseFloat() convierte un string a number(coma flotante, para representar numeros reales)
dato = parseInt('100');
console.log('"100" to parseInt = ', dato, ' y el tipo de dato es = ', typeof(dato));
dato = parseFloat('100');
console.log('"100" to parseFloat = ', dato, ' y el tipo de dato es = ', typeof(dato));
dato = parseFloat ('100.23568');
console.log('"100.23568" to parseFloat = ', dato);

// toFixed() devuelve un string redondeado sin decimales
dato = 188889888;
console.log('dato = ', dato);
dato = 123654.923654987;
console.log('dato = ', dato);
console.log('"123654.923654987" redondeado sin decimales = ', dato.toFixed()); // string redondeado (sin decimales)
console.log('"123654.923654987" redondeado con 3 decimales = ', dato.toFixed(3)); // string con tres decimales
console.log('"123654.923654987".toFixed(3) es un tipo de dato = ', typeof dato.toFixed(3));
console.log('"123654.923654987" es un tipo de dato = ', typeof dato);

// LONGITUD NUMEROS
let cp;
cp = 24005; 
console.log('Codigo postal = ', cp);
console.log('24005 es un tipo de dato = ', typeof cp);
console.log('¿Qué longitud tiene el número 24005? ', cp.length); //length solo sirve para String y arrays