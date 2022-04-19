// JSON
/* {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
} */


// Para utilizar un JSON como un objeto literal de JavaScript, simplemente asignamos el JSON a una variable/constante.
const SUPERHEROES = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

// Acceder a las propiedades del JSON
console.log('JSON como objeto literal = ', SUPERHEROES);
console.log('SUPERHEROES.squadName = ', SUPERHEROES.squadName);

// Modificación valor de una propiedad
SUPERHEROES.formed = 2021;
console.log('SUPERHEROES.formed = ', SUPERHEROES.formed);

// Eliminación de propiedad-valor
delete SUPERHEROES.active;
console.log('JSON DESPUES de ELIMINAR propiedad active = ', SUPERHEROES);

// Recorrer array de objetos (powers) del primer elemento del array de objetos members
SUPERHEROES.members[0].powers.forEach((element) => {
  console.log(`power ${element}`);
});


// CONVERTIR JSON A OBJETO
// Cuando recibimos una cadena JSON sin procesar y necesitamos convertirla en un objeto nosotros mismos. 
// const OBJ = JSON.parse(SUPERHEROES); // ERROR (SUPERHERORES NO ES UN STRING)
// console.log('OBJETO de JSON = ', SUPERHEROES); 

// Template literals, si no, tendría que eliminar todos los saltos de línea y utilizar comillas simples antes y despues de {}
const SUPERSTRING = `{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}`;

const OBJ2 = JSON.parse(SUPERSTRING);
console.log('OBJETO DE JSON STRING = ', OBJ2);

// Recorrer array de objetos members
OBJ2.members.forEach((element) => {
  console.log('miembro = ', element);
});




// CONVERTIR OBJETO A JSON
// cuando queremos enviar un objeto JavaScript a través de la red, debemos convertirlo a JSON (una cadena) antes de enviarlo. 
// undefined, Functions y Symbols no son valores JSON válidos.
const SUPERJSON1 = JSON.stringify(OBJ2);
console.log('SUPERJSON1 = ', SUPERJSON1);

const SUPERJSON2 = JSON.stringify(SUPERHEROES);
console.log('SUPERJSON2 = ', SUPERJSON2);

// JSON es una cadena de texto
console.log('SUPERJSON1.homeTown', SUPERJSON1.homeTown); // UNDEFINED


// ERROR JSON es una cadena de texto
/* SUPERJSON2.members.forEach((element) => {
  console.log('miembro = ', element);
}); */

