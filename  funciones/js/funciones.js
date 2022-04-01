// FUNCIONES
// Formas de crear una función
// Se pueden declarar funciones con el mismo nombre
// Pero al invocar la función, se invocará la última que hayamos declarado
// (Hosting, las declaraciones de funciones se mueven al principio del ámbito principal)
// Por el hosting, las funciones se pueden invocar antes de ser declaradas

// Por declaración
saludar("Sr. D."); // se ejecuta la última función con el nombre saludar
function saludar(tratamiento) {
  let nombre = prompt("¿Cómo te llamas? ");
  console.log(`Hola  ${tratamiento} ${nombre}`);
}

function saludar(nombre) {
  console.log(`function saludar ultima  ${nombre}`);
}
saludar("DIM");

// A las variables definidas como parámetros se les puede inicializar
// a un valor, que será el que tome por defecto si no se les pasa ninguno
function saludar3(nombre = "Visitante") {
  return `hola ${nombre}`;
}
// Asigna la función a la variable resultado
let resultado = saludar3;
console.log("resultado = ", resultado);
// Ahora asigna el valor que devueva la funcion saludar3, porque se ha invocado saludar3()
resultado = saludar3();
console.log("resultado = ", resultado);
console.log(saludar3("Pepe"));
console.log(saludar3());

function sumar(a = 1, b = 3) {
  return a + b;
}
console.log("4 + 5 = ", sumar(4, 5));
console.log("suma sin parámetros = ", sumar());

// Por expresión (FUNCTION EXPRESION)
// Las funciones creadas de esta manera no necesitan NOMBRE de FUNCION
const NUMALEATORIO = function aletorio(num) {
  return Math.floor(Math.random() * num + 1);
};
// aleatorio(); // aleatorio is not defined
console.log("Número aleatorio entre 1 y 7: ", NUMALEATORIO(7));

// Como OBJETO
// new Function([arg1 [, arg2 [, ...argN]] ,] functionBody)
const RESTA = new Function("a", "b", "return a - b");
console.log("6 - 2 = ", RESTA(6, 2));

// TIPOS DE FUNCIONES
// FUNCIONES ANONIMAS (no tienen nombre)
// .toFixed([digitos]) devuelve un String, digitos = número de digitos que aparecen después del punto decimal
const RAIZCUADRADA = function (num = 0) {
  return Math.sqrt(num).toFixed(3);
};
console.log("La raíz cuadrada de 1265 = ", RAIZCUADRADA(1265));

// FUNCIONES AUTOEJECUTABLES (IIFE (Expresión de ejecución inmediata))
// al final se añade ()
// son funciones anónimas, no es necesario invocarlas, se invoncan automáticamente

(function () {
  console.log("Creando un IIFE");
})();

// IIFE CON PARAMETROS
(function (lenguaje) {
  console.log(`Aprendiendo ${lenguaje}`);
})("JavaScript");

// CIERRES
function test() {
  let a = 1,
    b = 2;
  return function () {
    // la función interna tiene acceso a las variables 'a' y 'b'
    return a + b;
  };
}
let testFN = test();
console.log("1 test = ", testFN()); // 3
console.log("2 test = ", testFN()); // 3
console.log("3 test = ", testFN()); // 3

// Si quiero que me guarde los valores a y b
// Es necesario declarar otra variable para almacenar el entorno
const TESTFINAL = function () {
  let a = 1,
    b = 2;
  return function () {
    // la función interna tiene acceso a las variables 'a' y 'b'
    a++;
    b++;
    return a + b;
  };
};
// La variable TESTFINAL contiene la función
console.log('TESTFINAL = ', TESTFINAL());
let final = TESTFINAL();
console.log("1 test = ", final()); // 3
console.log("2 test = ", final()); // 3
console.log("3 test = ", final()); // 3

// con IIFE
const ADD = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
console.log("1 invocacion = ", ADD());
console.log("2 invocacion = ", ADD());
console.log("3 invocacion = ", ADD());

// SIN IIFE
const REST = function () {
  let valor = 100;
  return function () {
    return valor--; // primero devuelve valor y después decrementa
  };
};
let decrementa = REST();
console.log("1 decrementa = ", decrementa());
console.log("2 decrementa = ", decrementa());
console.log("3 decrementa = ", decrementa());

// FUNCIONES FLECHA (ARROW FUNCTION)
const COLORES = ["rojo", "verde", "azul"];
COLORES.forEach((color) => console.log(color.toUpperCase()));

const MATERIALS = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const MATERIALS2 = MATERIALS.map((element) => element.length);
console.log(MATERIALS2);
console.log(MATERIALS2.toString());

// METODOS DE PROPIEDAD
// cuando a una propiedad de un objeto se le asigna una función

const MUSICA = {
  reproducir: function () {
    console.log(`Reproduciendo Musica`);
  },
  pausar: function () {
    console.log(`Pausar música`);
  },
};
MUSICA.reproducir(); // reproducir es una propiedad de musica
MUSICA.pausar();
// MUSICA = 'hola'; // error, es una const

// DANDO FUNCIONALIDAD
const MUSICA2 = {
  reproducir: function (id) {
    console.log(`Reproduciendo Canción id ${id}`);
  },
  pausar: function () {
    console.log(`Pausar música`);
  },
};
MUSICA2.reproducir(20);

// LOS METODOS TAMBIÉN LOS PODEMOS ENCAPSULAR / CREAR FUERA DEL OBJETO
MUSICA.borrar = function (id) {
  console.log(`Borrando la canción con el ID: ${id}`);
};
console.log("Objeto musica = ", MUSICA);
MUSICA.borrar(5);

// TRY CATCH
// esta funcion lo que hace es sacar por consola el mensaje y a los 3 segundos muestra Completo
function obtenerCanción() {
  console.log("Descargando ...");
  setTimeout(function () {
    // la función setTimeout tiene dos parámetros, una función y un tiempo
    console.log("Completo");
  }, 3000);
}
obtenerCanción();

//algo(); // si intento invocar esta función, al no existir, detiene la ejecución del scirpt

/* La declaración try...catch señala un bloque de instrucciones a intentar (try), y 
especifica una respuesta si se produce una excepción (catch)
 */
try {
  algo();
} catch (error) {
  console.log("Error producido = ", error);
} finally {
  //podemos poner
  // se ejecutan después de que se completa la declaración try
  console.log("Se ejecuta SIEMPRE....");
}
