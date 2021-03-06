// EJERCICIOS HTML DOM

// NO PUEDE MODIFICAR DIRECTAMENTE EL ARCHIVO INDEX.HTML
// TODAS LAS MODIFICACIONES TIENE QUE HACERLAS MEDIANTE JAVASCRIPT

/* 1.- Implementar una función autoejecutable que vincule el archivo ejerciciosDOM.js a la página web */
console.warn('ejercicio num 1');

// (function () {
//   document.querySelector('script').setAttribute("src", "ejerciciosDOM.js");
//   document.querySelector('script').setAttribute("defer", "");
// })();


/* 2. Poner el fondo fucsia en:
<p id = "intro"> Quiero poner el fondo fucsia</p> */
console.warn('ejercicio num 2');

//document.getElementById('intro').style.backgroundColor= '#e30052';


/* 3.- Cambiar el título de la página a "JS-DIM-Num Aleatorio (entre 1 y 43)".
De tal manera, que cada vez que se abra la página se genere un título diferente, variando únicamente el número aleatorio.
Para ello, implemente una expresión de función anónima e invóquela posteriormente. */
console.log('ejercicio num 3');

let generaTitulo = function () {
    return Math.floor((Math.random()*42) + 1); 
};
document.title = "JS-DIM-" + generaTitulo();


/* 4.- Insertar al principio del header un encabezado h1 "EJERCICIO DOM - DIM XLIV -" y debajo, debe modificar 
el contenido del encabezado h2 para que ponga la fecha local, del día en el que nos encontremos, ejemplo
('Hoyo de Manzanares, 30 de marzo de 2022'). La barra de navegación debe estar compuesta 
por dos enlaces, uno al Home y otro a la página https://web.institutomilitar.com. Los dos encabezados 
tienen que estar centrados horizontalmente y los enlaces tienen que estar alineados a la izquierda. */
console.warn('ejercicio num 4');

const fecha = new Date();

const h1 = document.createElement("h1");
h1.textContent = "EJERCICIO DOM - DIM XLIV -";
h1.style.textAlign = "center";
//h1.setAttribute("id", "tituloh1");

const h2 = document.querySelector("h2");
// h2.insertAdjacentElement("beforebegin", h1);
// h2.textContent = 'Hoyo de Manzanares, ' + fecha.toUTCString;
// h2.style.textAlign = "center";

const nav = document.querySelector("nav");
//nav.setAttribute("href", "https://web.institutomilitar.com");
//nav.textContent = "instituto militar";
//nav.textAlign = "left";


/* 5.- ELIMINAR el párrafo que tiene en el texto la palabra TRES */
console.warn('ejercicio num 5');

let parrafos = document.querySelector(".parrafos");
//console.log(parrafos.childNodes);

//console.log(document.querySelector(".parrafos").children);



/* 6.- Cambiar el color del texto a azul al párrafo que tiene la palabra DOS */
console.warn('ejercicio num 6');





/* <section class="listas">
        <h3>LISTAS</h3>
      </section>
7.- Despúes del elemento <h3>LISTAS</h3>, inserte DOS listas ordenadas que comiencen en 100 a partir del array MESES.
 Para insertar la primera lista, utilice template literals.
 Y para insertar la segunda lista, utilice una expresión de función (arrow function), los meses deben aparecer en orden descendente, en
 este caso utilice algún método insertAdjacent*()  */
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('ejercicio num 7');










/* 8.- Modifique el footer para que tenga un color de fondo (el que quiera) y permanezca fijo en la pantalla, es decir, no 
se mueva al hacer scroll en la pantalla.
  */
console.log('ejercicio num 8');

// let footer = document.getElementById("footer");
// footer.setAttribute("style", "background-color: blue");







/* 9.-  <p>
            Sexo: <input type="radio" name="sexo" value="H" /> Hombre
            <input type="radio" name="sexo" value="M" /> Mujer
          </p>
Modifique el elemento para que la opción por defecto sea 'Hombre'
          */
console.log('ejercicio num 9');








/* 10.- <input  type="checkbox" id="fcheckbox" name="futbol" />
Modifique el elmento para que cuando el usuario pongo el puntero del ratón encima de la casilla de verificación
aparezca el mensaje emergente '¿Estás segur@?' */
console.log('ejercicio num 10');
