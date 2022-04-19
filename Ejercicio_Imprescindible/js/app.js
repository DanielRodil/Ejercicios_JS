/* Cuando tenga que mostrar algún resultado por consola, debe aparecer el siguiente texto
 "Ejercicio NumEjercio ==> " y a continuación el resultado, Ejemplo: Ejercicio 1 ==>  ... */


/* 1.- Muestre por consola el JSON del archivo json.js */
console.log("Ejercicio 1 ==> " , PERSONAJES);


/* 2.- Cree una clase "Personaje" que contenga, lo siguiente:
- propiedades: "id", nombre", "altura", "peso", pelo", "sexo", "hogar", "peliculas" y "url".
- películas será un array.
- debe tener dos campos computados para que cuando devuelva el peso debe añadir al final de su 
valor "kg", y cuando devuelva la altura, debe añadir al final "cm".
- método estático: recibirá como parámetro el valor de la propiedad "url" del objeto y devolverá el id del personaje  */
console.log("Ejercicio 2 ==> ");

class Personaje {
    id;
    nombre;
    altura;
    peso;
    pelo;
    sexo;
    hogar;
    peliculas = [];
    url;

    constructor() {};

    get getAltura(){
        return this.altura + "cm";
    };

    get getPeso(){
        return this.peso + "kg";
    }

    static getId(url){
        const HTTPS = url.split("/");
        let idUrl = HTTPS[HTTPS.length - 2];
        return idUrl;
    }

}


/* 3.- Instancie un objeto de la clase Personaje y asígnele los siguientes valores a las siguientes propiedades
altura = 185, peso = 90 y url = https://swapi.dev/api/people/44/ 
Muestre por consola los valores de la altura, peso e id*/
console.log("Ejercicio 3 ==> ");

let personaje = new Personaje();
personaje.altura = 185;
personaje.peso = 90;
personaje.url = "https://swapi.dev/api/people/44/";

console.log("altura = " + personaje.getAltura + "; peso = " + personaje.getPeso + "; id = " + Personaje.getId(personaje.url));


/* 4.- Implemente una función que pasandole como parametro un objeto del json mapee y cree un objeto del tipo personaje */
console.log("Ejercicio 4 ==> ");

function mapearPersonaje(objetoJSON){
    const PERSONAJE = new Personaje();
    PERSONAJE.nombre = objetoJSON.name;
    PERSONAJE.altura = objetoJSON.height;
    PERSONAJE.peso = objetoJSON.mass;
    PERSONAJE.color = objetoJSON.hair_color;
    PERSONAJE.sexo = objetoJSON.gender;
    PERSONAJE.hogar = objetoJSON.homeworld;
    PERSONAJE.url = objetoJSON.url;
    PERSONAJE.id = Personaje.getId(PERSONAJE.url);
    objetoJSON.films.forEach(element => {
        PERSONAJE.peliculas.push(element);
    });
    return PERSONAJE;
}


/* 5.- Implemente una función que recorra el JSON y devuelva un array de objetos del tipo Personaje */
console.log("Ejercicio 5 ==> ");

function arrayPersonajes(){
    const ARRAYPERSONAJES = [];
    PERSONAJES.results.forEach(element => {
        ARRAYPERSONAJES.push(mapearPersonaje(element)); // ARRAYPERSONAJES.push(element); también serviría
    });
    return ARRAYPERSONAJES;
}


/* 6.- Cree una variable global que contenga el resultado de la función del punto anterior. 
Muestre el valor de dicha variable por consola*/
console.log("Ejercicio 6 ==> ");

let personajesJSON = arrayPersonajes();
console.log(arrayPersonajes());

// otra opción

arrayPersonajes().forEach(element => {
    console.log(element);
})


/* 7.- Cree una variable por planeta, de tal manera que contengan los personajes que este planeta por hogar.
Hágalo a partir del array de objetos de personajes del punto anterior. Si no le ha funcionado hágalo a partir del json.
Muestre el resultado por consola */

// A partir del array de objetos de personajes
console.log("Ejercicio 7A ==> ");

const PLANETSA = [];
arrayPersonajes().forEach((element) => {
    if (element.hogar.toUpperCase() == "PLANETSA") {
        PLANETSA.push(element);
    } 
})
console.log("Planet A:");
PLANETSA.forEach((element) => {
    console.log(element);
})

const PLANETSB = [];
arrayPersonajes().forEach((element) => {
    if (element.hogar.toUpperCase() == "PLANETSB") {
        PLANETSB.push(element);
    }
})

console.log("Planet B:");
PLANETSB.forEach((element) => {
    console.log(element);
})

const PLANETSC = [];
arrayPersonajes().forEach((element) => {
    if (element.hogar.toUpperCase() == "PLANETSC") {
        PLANETSC.push(element);
    }
})

console.log("Planet C:");
PLANETSC.forEach((element) => {
    console.log(element);
})


// A partir del json
console.log("Ejercicio 7B ==> ");

const PLANETSAJSON = [];
PERSONAJES.results.forEach((element) => {
    if (element.homeworld.toUpperCase() == "PLANETSA") {
        PLANETSAJSON.push(element);
    }
})

console.log("Planet A:");
PLANETSAJSON.forEach((element) => {
    console.log(element);
})



/* 8.- Ordene de forma creciente los arrays anteriores por el valor del nombre. Si no ha conseguido hacer
el ejercicio anterior, cree un array a partir del JSON y ordenelo por el valor del nombre 
Muestre el resultado por consola. */
console.log("Ejercicio 8 ==> ");

PLANETSA.sort((a, b) => {
    let resultado = 0;
    if (a.nombre > b.nombre) {
        resultado = 1;
    } else { 
        if (a.nombre < b.nombre) {
            resultado = -1;
        } 
    }
    return resultado;
});

console.log(PLANETSA);

// modo tradicional

function ordenaArray(a, b) {
    let resultado = 0;
    if (a.nombre > b.nombre) {
        resultado = 1;
    } else { 
        if (a.nombre < b.nombre) {
            resultado = -1;
        } 
    }
    return resultado;    
}

console.log(PLANETSB.sort(ordenaArray));


/* 9.-  Implemente la función mostrarPersonajes.
De tal manera, que cuando el usuario haga click sobre dicho encabezado ('Ejercicio de Repaso')
se muestren los personajes en cada planeta. En Películas debe poner el número de películas que ha realizado */
console.log("Ejercicio 9 ==> ");

// function mostrarPersonajesPlanetas(ARRAYPLANETAS) {
//     const ARRAYPERSONAJESPLANETA = [];
//     ARRAYPLANETAS.forEach((element) => {
//         ARRAYPERSONAJESPLANETA.push(element.nombre);
//     })
//     return ARRAYPERSONAJESPLANETA;
// }

// console.log(mostrarPersonajesPlanetas(PLANETSA));

function mostrarPersonajesPlanetaA(ARRAYPLANETAS){
    let tbody = document.querySelector('.planetsA');
    tbody.innerHTML = " ";
    ARRAYPLANETAS.forEach((element) => {
        let fila = document.createElement('tr');
        // Ejercicio 10
        if (element.sexo == "female") {
            fila.classList.add("text-danger");
        } else {
            if (element.sexo == "male") {
                fila.classList.add("text-success");
            } else {
                fila.classList.add("text-warning");
            }
        }        
        let celda1 = document.createElement('td');
        let celda2 = document.createElement('td');
        celda1.textContent = element.nombre;
        celda2.textContent = element.peliculas.length;
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        tbody.appendChild(fila);
    }) 
}

function mostrarPersonajesPlanetaB(ARRAYPLANETAS){
    let tbody = document.querySelector('.planetsB');
    tbody.innerHTML = " ";
    ARRAYPLANETAS.forEach((element) => {
        let fila = document.createElement('tr');
        // Ejercicio 10
        if (element.sexo == "female") {
            fila.classList.add("text-danger");
        } else {
            if (element.sexo == "male") {
                fila.classList.add("text-success");
            } else {
                fila.classList.add("text-warning");
            }
        }    
        let celda1 = document.createElement('td');
        let celda2 = document.createElement('td');
        celda1.textContent = element.nombre;
        celda2.textContent = element.peliculas.length;
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        tbody.appendChild(fila);
    }) 
}

function mostrarPersonajesPlanetaC(ARRAYPLANETAS){
    let tbody = document.querySelector('.planetsC');
    tbody.innerHTML = " ";
    ARRAYPLANETAS.forEach((element) => {
        let fila = document.createElement('tr');
        // Ejercicio 10
        if (element.sexo == "female") {
            fila.classList.add("text-danger");
        } else {
            if (element.sexo == "male") {
                fila.classList.add("text-success");
            } else {
                fila.classList.add("text-warning");
            }
        }
        let celda1 = document.createElement('td');
        let celda2 = document.createElement('td');
        celda1.textContent = element.nombre;
        celda2.textContent = element.peliculas.length;
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        tbody.appendChild(fila);
    }) 
}

function mostrarPersonajes() {
    mostrarPersonajesPlanetaA(PLANETSA);
    mostrarPersonajesPlanetaB(PLANETSB);
    mostrarPersonajesPlanetaC(PLANETSC);
    mostrarDatos();
}

let h1 = document.querySelector('h1.personajes');
h1.onclick = mostrarPersonajes;

/* 10.- Modifique la función anterior, de tal manera que cambie el color del texto de la fila
del personaje, en función del sexo del personaje.
male, class = text-success
female, class = text-danger
n/a, class = text-warning */
console.log("Ejercicio 10 ==> ");


/* 11.- Implemente una función calcularDatos, que obtenga los siguientes datos, por planetas:
- Altura máxima
- Media altura
- Peso máximo
- Media peso 
Esta función se debe invocar cuando se muestren los datos de los personajes (mostrarPersonajes()) */
console.log("Ejercicio 11 ==> ");

let alturaMaxima = 0;
let alturaMedia = 0;
let pesoMaximo = 0;
let pesoMedio = 0;

function calcularDatos(ARRAYPLANETAS) {
    const ALTURAS = [];
    const PESOS = [];
    let acumulaPesos = 0;
    let acumulaAlturas = 0;
    ARRAYPLANETAS.forEach((element) => {
        ALTURAS.push(element.altura);
        PESOS.push(element.peso);
        acumulaAlturas += Number(element.altura);
        acumulaPesos += Number(element.peso);
    })
    alturaMaxima = Math.max.apply(null, ALTURAS);
    pesoMaximo = Math.max.apply(null, PESOS);
    alturaMedia = (acumulaAlturas/ARRAYPLANETAS.length).toFixed(2);
    pesoMedio = (acumulaPesos/ARRAYPLANETAS.length).toFixed(2);
}

function mostrarDatosPersonajesA() {
    document.querySelector('td.altura-mediaA').innerHTML = alturaMedia + "cm";
    document.querySelector('td.altura-maximaA').innerHTML = alturaMaxima + "cm";
    document.querySelector('td.peso-medioA').innerHTML = pesoMedio + "kg";
    document.querySelector('td.peso-maximoA').innerHTML = pesoMaximo + "kg";
}

function mostrarDatosPersonajesB() {
    document.querySelector('td.altura-mediaB').innerHTML = alturaMedia + "cm";
    document.querySelector('td.altura-maximaB').innerHTML = alturaMaxima + "cm";
    document.querySelector('td.peso-medioB').innerHTML = pesoMedio + "kg";
    document.querySelector('td.peso-maximoB').innerHTML = pesoMaximo + "kg";
}

function mostrarDatosPersonajesC() {
    document.querySelector('td.altura-mediaC').innerHTML = alturaMedia + "cm";
    document.querySelector('td.altura-maximaC').innerHTML = alturaMaxima + "cm";
    document.querySelector('td.peso-medioC').innerHTML = pesoMedio + "kg";
    document.querySelector('td.peso-maximoC').innerHTML = pesoMaximo + "kg";
}

function mostrarDatos() {
    calcularDatos(PLANETSA);
    mostrarDatosPersonajesA();
    calcularDatos(PLANETSB);
    mostrarDatosPersonajesB();
    calcularDatos(PLANETSC);
    mostrarDatosPersonajesC();
}

/* 12.- Implemente un evento, de tal manera que cuando se pulse la tecla "g" (minúscula)
apareza una ventana con el "gif_Animado.gif", esta ventana se debe cerrar automáticamente pasado 5 segundos */
console.log("Ejercicio 12 ==> ");

let funcion = function (event) {
    if (event.key = "g") {
        let ventanaAnimada = window.open("img/gif_Animado.gif", "_blank", "top = 300, left = 800, width = 300, heigth = 200");
        setTimeout(() => {
            ventanaAnimada.close();
        }, 5000);
    }
}

document.body.addEventListener("keypress", funcion);


/* 13.- Implemente la función filtrarPeliculas(), de tal manera que cuando el usuario seleccione
un personaje deben aparecer sus películas con el siguiente formato:
nombre de pelicula (year) */
console.log("Ejercicio 13 ==> ");

let html;
const ARRAYPERSONAJES = arrayPersonajes();
function filtrarPeliculas() {
    html = " ";
    let idPersonaje = document.querySelector("#select-personaje").value;
    let peliculasPersonaje = [];
    ARRAYPERSONAJES.forEach(element => {
        if (Number(element.id) == (Number(idPersonaje))) {
            peliculasPersonaje = element.peliculas.slice();
        }
    });
    let divFilmsPersonaje = document.querySelector("div.peliculas-personaje");
    divFilmsPersonaje.innerHTML = " ";
    html = "<ol> ";
    peliculasPersonaje.forEach((element) => {
        html += "<li> " + element.title + " (" + element.year + ") <li>"; 
    });
    html += " </ol>";
    divFilmsPersonaje.innerHTML = html;
    //divFilmsPersonaje.insertAdjacentHTML("beforebegin", html);
}

// Ejercicio EXTRA: cada vez que se cargue la pagina se modifique el titulo con una funcion random
// por DIM + un numero aleatorio hasta 44
console.log("Ejercicio EXTRA ==> ");

let aleatorio = function () {
    return Math.floor((Math.random() * 44) + 1);
}

let h3 = document.querySelector("h3.titulo");

h3.textContent = "Curso DIM " + aleatorio();

