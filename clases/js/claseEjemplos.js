// CLASES
// Primeo se debe declarar la clase y luego crear la instancia u objeto
// const PRUEBA = new Rectangulo(); // ReferenceError
class Rectangulo {
    // Una clase sólo puede tener un constructor
    // constructor() {}
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  }

// si no le paso parámetros al constructor las propiedades = undefined
const RECTANGULO1 = new Rectangulo();
const RECTANGULO2 = new Rectangulo(4, 3);
console.log('Objeto RECTANGULO1 = ', RECTANGULO1);
console.log('Objeto RECTANGULO2 = ', RECTANGULO2);


// DEFINIR UNA CLASE POR DECLARACION
// Declaración de una clase
class Animal {
  // Propiedades públicas
  _nombre;
  sexo;

  // Propiedades estáticas
  static chip = "chip estatica";
  static despedida = "Adiós.....";
 
  // Propiedades privadas
  // Su ámbito es dentro de la clase, desde fuera no se puede acceder
  #miSecreto = "Me gusta Internet Explorer";
 
  // Método que se ejecuta al hacer un new
  constructor(nombre) {
    this._nombre = nombre;
  }
  
  // GETTERS
  // para definir propiedades computadas de lectura o para acceder modo lectura desde fuera a las propiedades privadas
  // propiedad computada
  get nombre() {
    return "Sr. " + this._nombre;
  }
  
  get miSecreto() {
      return this.#miSecreto;
  }
  
  // SETTERS
  // para definir propiedades computadas de modificación o para acceder modo modificación desde fuera a las propiedades privadas
  set nombre(nombre) {
    this._nombre = nombre.trim();
  }
  
  set miSecreto(miSecreto) {
      this.#miSecreto = miSecreto;
  }
 
  // Método privado
  #decirSecreto() {
    return this.#miSecreto;
  }
 
  // Métodos públicos
  decirSacrilegio() {
    return this.#decirSecreto();
  }
  
  quienSoy() {
    return `Hola, soy ${this._nombre} (${this.sexo})`;
  }
  
  // Método Estático
  // en su interior sólo podemos hacer referencia a elementos que también sean estáticos
  static despedirse() {
    return `${this.despedida}`; // despedida, propiedad estática
  }
}
// NO hace falta crear el objeto para acceder a la propiedad y método estático
console.warn('Propiedad estática chip = ', Animal.chip);
Animal.chip = "chip modificado";
console.warn('Propiedad estática chip = ', Animal.chip);
// Crear o instanciar un objeto
const PATO = new Animal('Donald');
PATO.sexo = 'macho';
console.log('Nombre = ', PATO.nombre); // GETTER nombre  'Nombre = Sr. Donald'
console.log('QUIEN SOY = ', PATO.quienSoy()); // 'Hola, soy Donald (macho)'
console.log('Método estático Despedirse = ', Animal.despedirse()); // 'Adiós Donald'

const PATITOFEO = new Animal();
PATITOFEO.nombre = "  El patito feo  "; // SETTER nombre
PATITOFEO.sexo = "macho";
console.warn('QUIEN SOY = ', PATITOFEO.quienSoy());
// console.err('Método privado = ', PATITOFEO.#decirSecreto());     // Error
console.log('Método público = ', PATITOFEO.decirSacrilegio());   // OK.
PATITOFEO.miSecreto = "Me gusta JAVASCRIPT";  // SETTER PROPIEDAD PRIVADA
console.warn('MI SECRETO = ', PATITOFEO.miSecreto); // GETTER PROPIEDAD PRIVADA


// DEFINIR UNA CLASE POR EXPRESIÓN DE CLASE
// ANONIMA
const RECTANGULO = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};

console.log('Tipo de dato que contiene la variable constante RECTANGULO = ', typeof(RECTANGULO));
console.log('¿El tipo de dato que contiene RECTANGULO es Function? ', RECTANGULO instanceof Function);
console.log('AREA rectángulo (alto = 5, ancho = 8) = ', new RECTANGULO(5, 8).area());
// expected output: 40

// NOMBRADA
const RECTANGULONOMBRADA = class RectanguloN {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};
console.log('Tipo de dato que contiene la variable constante RECTANGULONOMBRADA = ', typeof(RECTANGULONOMBRADA));
console.log('¿El tipo de dato que contiene RECTANGULONOMBRADA es Function? ', RECTANGULONOMBRADA instanceof Function);
console.log('Nombre de la función RECTANGULONOMBRADA = ', RECTANGULONOMBRADA.name); // RectanguloN
console.log('Variable RECTANGULONOMBRADA = ', RECTANGULONOMBRADA);
// console.log('Variable RECTANGULONOMBRADA = ', RectanguloN);  // Uncaught ReferenceError: RectanguloN is not defined
const RECTANGULOPRUEBA = new RECTANGULONOMBRADA(7, 8);
console.log('Variable RECTANGULOPRUEBA = ', RECTANGULOPRUEBA); // contiene la referencia al objeto creado
console.log('Area del RECTANGULOPRUEBA = ', RECTANGULOPRUEBA.area());