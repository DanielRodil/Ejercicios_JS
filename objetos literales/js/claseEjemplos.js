// CREAR OBJETOS
const persona = {
  nombre: "Pepe",
  apellido: "Rodriguez",
  profesión: "informático",
  edad: 25,
  coches: ["6363KKK", "2525LLL"],
  mail: "peperodriguez@correo.com",
  direccion: {
    ciudad: "Madrid",
    calle: "una calle",
    numero: 15,
  },
  nacimiento: function () {
    return new Date().getFullYear() - this.edad;
  },
};

console.log('Objeto persona = ', persona);
console.log('persona.apellido = ', persona.apellido);
console.log('persona.mail = ', persona.mail);
console.log('persona.coches[1] = ', persona.coches[1]);
// Recorrer el array coches del objeto
persona.coches.forEach((coche) => console.log(coche));

// Acceder a la propiedad de un objeto
console.log('persona.direccion.ciudad = ', persona.direccion.ciudad);
// Propiedad función
console.log('persona.nacimiento() = ', persona.nacimiento());

// Array de Objetos
const motos = [
  { marca: "Honda", modelo: "CBR", cubicaje: 1000 },
  { marca: "Honda", modelo: "CR", cubicaje: 400 },
  { marca: "BMW", modelo: "GS", cubicaje: 600 },
  { marca: "Harley Davison", modelo: "Monster", cubicaje: 800 },
  { marca: "Harley Davison", modelo: "oTRAMonster", cubicaje: 1000 },
];
let marcaCoche = motos[2].marca;
console.log('marcaCoche elemento indice 2 = ', marcaCoche);

console.log('Recorrer array de objetos con for()');
for (let i = 0; i < motos.length; i++) {
  console.log('Elemento ', i, " del array = ", motos[i]);
  //probar con un template literal
  //console.log(`${motos[i]}`);
}

console.log('Recorrer array de objetos con forEach()');
// Template literals
motos.forEach((moto) => console.log(`${moto.marca}-${moto.modelo} (${moto.cubicaje})`));

// filter(), devuelve un array 
let motosHonda = motos.filter((moto) => {
  if (moto.marca == "Honda") {
    console.log('Moto de la marca Honda = ', moto);
    return moto;
  }
});
console.log('motos Honda = ', motosHonda);

// Cambiar el valor  de una propiedad de un objeto del array
motos[1].cubicaje = 500;

// Recorrer un array de objetos con el forEach()
motos.forEach((moto) => console.log(moto.marca, moto.cubicaje));

// filter()
let arrayPrueba = motos.filter((moto) => moto.cubicaje > 600);
console.log('ARRAY Motos cubicaje > 600 = ', arrayPrueba);
