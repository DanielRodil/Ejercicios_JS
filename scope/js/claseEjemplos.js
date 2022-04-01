//SCOPE ==> VISIBILIDAD DE LOS VALORES
//variables globales ==> SCOPE GLOBAL
var globalA = "global var a";
let globalB = "global let b";
const GLOBALC = "global const c";

function funcionScope() {
  //variables locales ==> SCOPE LOCAL
  var localA = "local var a";
  let localB = "local let b";
  const LOCALC = "local const C";
  var globalA = "local var a";
let globalB = "local let b";
const GLOBALC = "local const c";
  console.log("VARIABLES LOCALES: ", localA, ", ", localB, ", ", LOCALC);
  console.log("VARIABLES LOCALES: ", globalA, ", ", globalB, ", ", GLOBALC);
}

funcionScope();

// console.log('VARIABLES LOCALES: ',  localA, ', ', localB, ', ', localC);   // ReferenceError: variable not defined
// podemos comprobar que las variables globales mantienen su valor
// var, let y const tienen ambito de funcion
console.log("VARIABLES GLOBALES: ", globalA, ", ", globalB, ", ", GLOBALC);

//SCOPE DE BLOQUE
 {
  var bloqueA = "bloque var a";
  let bloqueB = "bloque let b";
  const BLOQUEC = "bloque const c";
  var globalA = "bloque var a";
  let globalB = "bloque let b";
  const GLOBALC = "bloque const c";
  console.log("VARIABLES BLOQUE: " + bloqueA + ", " + bloqueB + ", " + BLOQUEC);
  console.log("VARIABLES BLOQUE: ", globalA, ", ", globalB, ", ", GLOBALC);
}

// console.log("VARIABLES BLOQUE: " + bloqueA + ", " + bloqueB + ", " + BLOQUEC); //  ReferenceError: variable not defined
// comprueba que var no tiene ambito de bloque ya que reasigna el valor del bloque a la variable global var globalA
console.log("VARIABLES GLOBALES: ", globalA, ", ", globalB, ", ", GLOBALC);

// SCOPE DE BLOQUE
for (var globalA = 0; globalA < 10; globalA++) {
  console.log(globalA);
}

// Otro ejemplo más de que var no tiene ambito de bloque
console.log("VARIABLES GLOBALES:" + globalA, globalB, GLOBALC);

// let y const se ejecutan en el scope donde estan y no afectan al resto mientras que var si
