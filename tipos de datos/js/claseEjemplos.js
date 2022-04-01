/* JavaScrpt es un lenguaje debilmente tipado, las variables no están asociadas directamente
con ningun tipo de valor en particular. El tipo de dato está asociado al valor, no a las variables */

// TIPOS DE DATOS

// Variables definidas con let
let valor;

// PRIMITIVOS (tipos de datos elementales de un lenguaje de programacion)
// Undefined
console.error('Variable sin definir --> variable =', valor);
// para saber el tipo de una variable se puede usar el operador typeof o el método typeof()
console.info('Tipo de dato --> variable es',  typeof valor);
console.info('Tipo de dato --> variable es',  typeof(valor));

// Boolean
valor = true;
console.log("Boolean --> variable =", valor);
console.log("Tipo de dato Boolean--> variable es", typeof(valor));

// String
// Las cadenas de texto se escriben entre comillas simples o dobles.
valor = 'Curso DIM';
console.log("String --> variable =", valor);
console.log("Tipo de dato String--> variable es", typeof valor);

// Number
valor =  20;
console.log("Number --> variable =", valor);
console.log("Tipo de dato Number--> variable es", typeof valor);

// BigInt
valor = 12154587887878n;
console.log("BigInt --> variable =", valor);
console.log("Tipo de dato BigInt --> variable es", typeof valor);

// Null (tipo especial)
valor  = null;
console.log("Null --> variable =", valor);
console.log("Tipo de dato Null --> variable es", typeof(valor));


// SIMBOLO (para agregar claves de propiedad unicas a un objeto)
// crea un simbolo cuya descripción es DIM
valor = Symbol('DIM');
console.log("Simbolo --> variable =", valor);
console.log("Tipo de dato Simbolo --> variable es", typeof(valor));



// TIPOS DE OBJETO (POR REFERENCIA)
// Para saber el tipo de una variable cuando es objeto, instanceof
// typeof() es para datos primitivos
// Objeto
valor = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log("Objeto --> variable =", valor);
console.log("Tipo de dato Objeto (con typeof)--> variable es", typeof(valor));
console.log("Tipo de dato Objeto (con instanceof)--> ¿la variable es OBJETO?", valor instanceof Object);

// Function
valor  = function() { alert('Hola')};
console.log("Function --> variable =", valor);
console.log("Tipo de dato Function (con typeof)--> variable es", typeof(valor));
console.log("Tipo de dato Function (con instanceof)--> ¿la variable es Function?", valor instanceof Function);

// ARRAYS
valor = [ 1, 2, 3, 4];
console.log("Array --> variable =", valor);
console.log("Tipo de dato Array (con typeof)--> variable es", typeof(valor));
console.log("Tipo de dato Array (con instanceof)--> ¿la variable es Array?", valor instanceof Array);

// FECHA
valor = new Date();
console.log("Fecha --> variable =", valor);
console.log("Tipo de dato Fecha (con typeof)--> variable es", typeof(valor));
console.log("Tipo de dato Fecha (con instanceof)--> ¿la variable es Date?", valor instanceof Date);

