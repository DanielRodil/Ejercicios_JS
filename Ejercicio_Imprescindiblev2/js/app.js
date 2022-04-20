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
    _altura;
    _peso;
    pelo;
    sexo;
    hogar;
    peliculas = [];
    url;

    constructor() {};

    get altura() {
        return this._altura + " cm";
    }

    get peso() {
        return this._peso + " kg";
    }

    static getId(url) {
        const ARRAYURL = url.split("/");
        let idUrl = ARRAYURL[5];
        return idUrl;
    }

}


/* 3.- Instancie un objeto de la clase Personaje y asígnele los siguientes valores a las siguientes propiedades
altura = 185, peso = 90 y url = https://swapi.dev/api/people/44/ 
Muestre por consola los valores de la altura, peso e id*/
console.log("Ejercicio 3 ==> ");

const PERSONAJE = new Personaje();
PERSONAJE._altura = '185';
PERSONAJE._peso = '90';
PERSONAJE.url = 'https://swapi.dev/api/people/44/'; 

console.log('la altura del personaje es', PERSONAJE.altura);
console.log('el peso del personaje es', PERSONAJE.peso);
console.log('el id del personaje es', Personaje.getId(PERSONAJE.url));


/* 4.- Implemente una función que pasandole como parametro un objeto del json mapee y cree un objeto del tipo personaje */
console.log("Ejercicio 4 ==> ");

function mapearPersonaje(OBJETOJSON) {
    const PERSONAJE = new Personaje();
    PERSONAJE.nombre = OBJETOJSON.name;
    PERSONAJE._altura = OBJETOJSON.height;
    PERSONAJE._peso = OBJETOJSON.mass;
    PERSONAJE.pelo = OBJETOJSON.hair_color;
    PERSONAJE.sexo = OBJETOJSON.gender;
    PERSONAJE.hogar = OBJETOJSON.homeworld;
    PERSONAJE.url = OBJETOJSON.url;
    PERSONAJE.id = Personaje.getId(PERSONAJE.url);
    OBJETOJSON.films.forEach(element => {
        PERSONAJE.peliculas.push(element);
    });
    return PERSONAJE;
}

/* 5.- Implemente una función que recorra el JSON y devuelva un array de objetos del tipo Personaje */
console.log("Ejercicio 5 ==> ");

function arrayPersonajes() {
    const ARRAYOBJETOS = [];
    PERSONAJES.results.forEach(element => {
        ARRAYOBJETOS.push(mapearPersonaje(element));
    });
    return ARRAYOBJETOS;
}


/* 6.- Cree una variable global que contenga el resultado de la función del punto anterior. 
Muestre el valor de dicha variable por consola*/

console.log("Ejercicio 6 ==> ");

const ARRAYPERSONAJES = arrayPersonajes();
console.log(ARRAYPERSONAJES);



/* 7.- Cree una variable por planeta, de tal manera que contengan los personajes que este planeta por hogar.
Hágalo a partir del array de objetos de personajes del punto anterior. Si no le ha funcionado hágalo a partir del json.
Muestre el resultado por consola */
// A partir del array de objetos de personajes

console.log("Ejercicio 7A ==> ");

const PLANETSA = [];
const PLANETSB = [];
const PLANETSC = [];

ARRAYPERSONAJES.forEach((element) => {
    if (element.hogar == "planetsA") {
        PLANETSA.push(element);
    } else {
        if (element.hogar == "planetsB") {
            PLANETSB.push(element);
        } else {
            PLANETSC.push(element);
        }
    }
})

console.log(PLANETSA);
console.log(PLANETSB);
console.log(PLANETSC);

// A partir del json

console.log("Ejercicio 7B ==> ");

const PLANETSAJSON = [];

PERSONAJES.results.forEach((element) => {
    if (element.homeworld == "planetsA") {
        PLANETSAJSON.push(element);
    }
})


/* 8.- Ordene de forma creciente los arrays anteriores por el valor del nombre. Si no ha conseguido hacer
el ejercicio anterior, cree un array a partir del JSON y ordenelo por el valor del nombre 
Muestre el resultado por consola. */

console.log("Ejercicio 8 ==> ");

function funcionOrdenado(a, b) {
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

PLANETSA.sort(funcionOrdenado);
console.log(PLANETSA);



/* 9.-  Implemente la función mostrarPersonajes.
De tal manera, que cuando el usuario haga click sobre dicho encabezado ('Ejercicio de Repaso')
se muestren los personajes en cada planeta. En Películas debe poner el número de películas que ha realizado */
console.log("Ejercicio 9 ==> ");

function mostrarPersonajesPlanetaA() {
    let tbody = document.querySelector('tbody.planetsA');    
    tbody.innerHTML = " ";
    PLANETSA.forEach((element) => {
        let fila = document.createElement('tr');
        if (element.sexo == "male") {
            fila.classList.add("text-success");
        } else {
            if (element.sexo == "female") {
                fila.classList.add("text-danger");
            } else {
                fila.classList.add("text-warning");
            }
        }
        let celda1 = document.createElement('td');
        let celda2 = document.createElement('td');
        celda1.innerHTML = element.nombre;
        celda2.innerHTML = element.peliculas.length;
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        tbody.appendChild(fila);
    })
}

function mostrarPersonajesPlanetaB() {
    let tbody = document.querySelector('tbody.planetsB');    
    tbody.innerHTML = " ";
    PLANETSB.forEach((element) => {
        let fila = document.createElement('tr');
        if (element.sexo == "male") {
            fila.classList.add("text-success");
        } else {
            if (element.sexo == "female") {
                fila.classList.add("text-danger");
            } else {
                fila.classList.add("text-warning");
            }
        }
        let celda1 = document.createElement('td');
        let celda2 = document.createElement('td');
        celda1.innerHTML = element.nombre;
        celda2.innerHTML = element.peliculas.length;
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        tbody.appendChild(fila);
    })
}

function mostrarPersonajesPlanetaC() {
    let tbody = document.querySelector('tbody.planetsC');    
    tbody.innerHTML = " ";
    PLANETSC.forEach((element) => {
        let fila = document.createElement('tr');
        if (element.sexo == "male") {
            fila.classList.add("text-success");
        } else {
            if (element.sexo == "female") {
                fila.classList.add("text-danger");
            } else {
                fila.classList.add("text-warning");
            }
        }
        let celda1 = document.createElement('td');
        let celda2 = document.createElement('td');
        celda1.innerHTML = element.nombre;
        celda2.innerHTML = element.peliculas.length;
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        tbody.appendChild(fila);
    })
}

function mostrarPersonajes() {
    mostrarPersonajesPlanetaA();
    mostrarPersonajesPlanetaB();
    mostrarPersonajesPlanetaC();
    mostrarDatosPlanetaA();
    mostrarDatosPlanetaB();
    mostrarDatosPlanetaC();
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
let pesoMedia = 0;

function calcularDatos(PLANETSX) {
    const ALTURAS = [];
    const PESOS = [];
    let acumulaAlturas = 0;
    let acumulaPesos = 0;
    PLANETSX.forEach((element) => {
        ALTURAS.push(element._altura);
        PESOS.push(element._peso);
    })
    alturaMaxima = Math.max.apply(null, ALTURAS);
    pesoMaximo = Math.max.apply(null, PESOS);
    ALTURAS.forEach((element) => {
        acumulaAlturas += Number(element);
    })
    alturaMedia = (acumulaAlturas/ALTURAS.length).toFixed(2);
    PESOS.forEach((element) => {
        acumulaPesos += Number(element);
    })
    pesoMedia = (acumulaPesos/PESOS.length).toFixed(2);
}

function mostrarDatosPlanetaA() {
    calcularDatos(PLANETSA);
    document.querySelector('td.altura-maximaA').innerHTML = alturaMaxima;
    document.querySelector('td.altura-mediaA').innerHTML = alturaMedia;
    document.querySelector('td.peso-maximoA').innerHTML = pesoMaximo;
    document.querySelector('td.peso-medioA').innerHTML = pesoMedia;
}

function mostrarDatosPlanetaB() {
    calcularDatos(PLANETSB);
    document.querySelector('td.altura-maximaB').innerHTML = alturaMaxima;
    document.querySelector('td.altura-mediaB').innerHTML = alturaMedia;
    document.querySelector('td.peso-maximoB').innerHTML = pesoMaximo;
    document.querySelector('td.peso-medioB').innerHTML = pesoMedia;
}

function mostrarDatosPlanetaC() {
    calcularDatos(PLANETSC);
    document.querySelector('td.altura-maximaC').innerHTML = alturaMaxima;
    document.querySelector('td.altura-mediaC').innerHTML = alturaMedia;
    document.querySelector('td.peso-maximoC').innerHTML = pesoMaximo;
    document.querySelector('td.peso-medioC').innerHTML = pesoMedia;
}


/* 12.- Implemente un evento, de tal manera que cuando se pulse la tecla "g" (minúscula)
apareza una ventana con el "gif_Animado.gif", esta ventana se debe cerrar automáticamente pasado 5 segundos */
console.log("Ejercicio 12 ==> ");

let funcionEvento = function (event) {
    if (event.key == "g") {
        let ventanaAnimada = window.open("img/gif_Animado.gif", "_blank", "top = 400 left = 300 width = 400 heigth = 300");
    }
    setTimeout(() => {
        ventanaAnimada.close();
    }, 5000);
}

document.body.addEventListener("keypress", funcionEvento);



/* 13.- Implemente la función filtrarPeliculas(), de tal manera que cuando el usuario seleccione
un personaje deben aparecer sus películas con el siguiente formato:
nombre de pelicula (year) */
console.log("Ejercicio 13 ==> ");

let html;

function filtrarPeliculas() {
    html = " ";
    let idPersonaje = document.querySelector("#select-personaje").value;
    let peliculasPersonaje = [];
    ARRAYPERSONAJES.forEach((element) => {
        if (Number(element.id) == Number(idPersonaje)) {
            peliculasPersonaje = element.peliculas.slice();
        }
    });
    let divFilmsPersonaje = document.querySelector("div.peliculas-personaje");
    divFilmsPersonaje.innerHTML = " ";
    html = `<ol> `;
    peliculasPersonaje.forEach((element) => {
        html += `<li>${element.title} (${element.year})</li>`;
    })
    html += `</ol> `;
    divFilmsPersonaje.innerHTML = html;
}


// Ejercicio EXTRA: cada vez que se cargue la pagina se modifique el titulo con una funcion random
// por DIM + un numero aleatorio hasta 44
console.log("Ejercicio EXTRA ==> ");

let aleatorio = function () {
    return Math.floor((Math.random() * 44) + 1);
}

document.querySelector("h3.titulo").textContent = "Curso DIM " + aleatorio();