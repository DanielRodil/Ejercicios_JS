// CADENAS DE TEXTO
let texto = "Curso DIM";
console.log('Longitud de la variable texto = ', texto.length); 
let letra;
console.log('texto = ', texto);
console.log('letra = ', letra); // undefined
letra = "DIM".charAt(0); // 'D'
console.log('letra = ', letra);
console.log('en Curso DIM que tiene el indice 2 = ', 'Curso DIM'.charAt(2));
letra = texto.charAt(2);
console.log('letra = ', letra);
letra = texto.charAt(15); // NO existe caracter en ese indice
console.log('letra = ', letra);
// Para obtener un caracter que ocupa una posicion []
letra = "DIM"[0]; // 'D'
console.log('letra = ', letra);
letra = texto[1];
console.log('letra = ', letra);
let spl = "Hola, pepe, luis y jose".split(",");
console.log(spl);


//SECUENCIAS DE ESCAPE
let mensaje = 'Empezando JavaScript: \'el Mejor lenguaje de programción\'';
console.log('Mensaje = ', mensaje);

//concatenar 
mensaje = 'java' + 'Script';
console.log('Mensaje = ', mensaje);
console.log("Curso" + 4 + 5); // 'Curso45'
console.log('20' + 4 + 5, ' es de tipo ', typeof('20' + 4 + 5));
console.log(Number('20') + 4 + 5, ' es de tipo ', typeof(Number('20') + 4 + 5));
console.log(Number('20' + 4) + 5, ' es de tipo ', typeof(Number('20' + 4) + 5));
// son numeros, por lo tanto, realiza la suma
console.log(10 + 5 + 4 + 5); // 24

//uniendo variables
let aprendiendo = 'Aprendiendo',
    lenguaje = 'javaScript';
console.log('variable aprendiendo + variable lenguaje', aprendiendo + lenguaje);

let aprendiendo2 = 3,
    lenguaje2 = 4;
console.log('variable aprendiendo2 + variable lenguaje2', aprendiendo2 + lenguaje2); //como las dos variables son números, muestra la suma

// mediate template literals (ESC6)// 
console.log('Template literals = ', `${aprendiendo} ${lenguaje}`);

// Propiedad
console.log('Longitud de la cadena aprendiendo = ', aprendiendo.length);

// Metodos
console.log(lenguaje.toUpperCase()); // muestra el valor de la variable en mayúscula, NO cambia su valor
console.log(lenguaje.toLowerCase());

// devuelve la primera posicion de un caracter
console.log("LenguajeJS, página de Javascript");
console.log('Primer indice del caracter n = ', "LenguajeJS, página de Javascript".indexOf("n")); // 2
// devuelve la primera posicion del texto a partir de un indice
console.log('Primer indice del caracter n a partir de la posicion 3 = ', "LenguajeJS, página de Javascript".indexOf("n", 3)); // 16
console.log('Primer indice del caracter n a partir de la posicion 17 = ', "LenguajeJS, página de Javascript".indexOf("n", 17)); // -1
// devuelve la ultima posicion de un caracter
console.log('Ultima posicion del caracter n = ', "LenguajeJS, página de Javascript".lastIndexOf("n")); // 16
// devuelve la ultima posicion de un carater a partir de un indice
console.log('Ultima posicion del caracter n a partir de la posicion 3 = ', "LenguajeJS, página de Javascript".lastIndexOf("n", 3)); // 2



mensaje = 'Esto es un mensaje de pruebas para aprender JavaScript';
console.log('Mensaje = ', mensaje);
console.log('Posicion en la que esta la cadena aprender = ', mensaje.indexOf('aprender')) //devuelve la posición en la que esta, -1 si no lo encuentra
console.log('String desde 0 hasta 10 = ', mensaje.substring(0, 10));
console.log('String 3 ultimos caracteres (desde atras hacia adelante) = ', mensaje.slice(-3)); // devuelve un string desde donde se indique (si el argumento es negativo, es de atras hacia delante)
console.log('String 3 primeros caracteres = ', mensaje.slice(3)); // devuelve un string con los 3 primeros caracteres
console.log('Array utilizando separador espacio en blanco = ', mensaje.split(' ')); // busca el separador (espacio en blanco) y devuelve una array
console.log("1.2.3.4.5".split(".")); // ['1', '2', '3', '4', '5'] (5 elementos)
console.log("Hola a todos".split(" ")); // ['Hola', 'a', 'todos'] (3 elementos)
console.log("Código".split("")); // ['C', 'ó', 'd', 'i', 'g', 'o'] (6 elementos)
console.log("Código".split()); // ['C', 'ó', 'd', 'i', 'g', 'o'] (6 elementos)
console.log('Mensaje reemplazando JavaScript por .NET = ', mensaje.replace('JavaScript', '.NET'));
console.log('¿En la variable mensaje está incluido la cadena JavaScript? = ', mensaje.includes('JavaScript')); // devuelve true o false
console.log('Repite cadena de texto 10 veces = ', lenguaje.repeat(10));// repite tantos valores como se le pida
console.log('texto sin espacios =', "    Hola  ".trim()); // 'Hola')

// COMPARANDO CADENAS DE TEXTO
let a = 'A'
let b = 'b'
if (a < b) { // true
  console.log(a + ' es menor que ' + b)
} else if (a > b) {
  console.log(a + ' es mayor que ' + b)
} else {
  console.log(a + ' y ' + b + ' son iguales.')
}

console.log('¿A es igual que a (teniendo en cuenta las mayúsculas)?', 'A' == 'a');
console.log('¿A es igual que a (sin tener en cuenta las mayúculas)?', 'A'.toLowerCase() == 'a'.toLowerCase());
console.log('¿A es igual que a (sin tener en cuenta las mayúculas)?', 'A'.toUpperCase() == 'a'.toUpperCase());
