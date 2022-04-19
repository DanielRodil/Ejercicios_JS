// EJERCICIOS HTML DOM

// NO PUEDE MODIFICAR DIRECTAMENTE EL ARCHIVO INDEX.HTML
// TODAS LAS MODIFICACIONES TIENE QUE HACERLAS MEDIANTE JAVASCRIPT

/* 1.- Implementar una función autoejecutable que 
vincule el archivo ejerciciosDOM.js a la página web */
(function () {
  document.querySelector('script').setAttribute("src", "ejerciciosDOM.js");
  document.querySelector('script').setAttribute("defer", "");
})();
/* Luego se comprueba con esto:
document.querySelector('script').getAttributeNames()
*/

/* 2. Poner el fondo fucsia en:
<p id = "intro"> Quiero poner el fondo fucsia</p> */
document.getElementById('intro').style.backgroundColor=  '#e30052';

/* 3.- Cambiar el título de la página a "JS-DIM-Num 
Aleatorio (entre 1 y 43)".De tal manera, que cada vez 
que se abra la página se genere un título diferente, 
variando únicamente el número aleatorio. Para ello, 
implemente una expresión de función anónima e invóquela 
posteriormente. */
(function () {
  document.querySelector('title').textContent = 'JS-DIM-' + Math.floor((Math.random() * (44 - 1 + 1)) + 1);
  console.log(document.querySelector('title').textContent);
})();

/* <header>
      <h2 class="fecha">fecha</h2>
      <nav></nav>
    </header> 
4.- Insertar al principio del header un encabezado h1 
"EJERCICIO DIM - DIM XLIV -" y debajo, debe modificar 
el contenido del encabezado h2 para que ponga la fecha 
local, del día en el que nos encontremos, ejemplo 
('Hoyo de Manzanares, 30 de marzo de 2022'). La barra de 
navegación debe estar compuesta por dos enlaces, uno al 
Home y otro a la página https://web.institutomilitar.com. 
Los dos encabezados tienen que estar centrados 
horizontalmente y los enlaces tienen que estar 
alineados a la izquierda. */
/* Solo se declara la primera vez, para la siguiente lo comento - 
NO PETA, NO SÉ PORQUÉ TAMPOCO, luego no comento */
const h1 = document.createElement("h1");
h1.setAttribute("id", "h1titulo");
var pillarTitulo = document.getElementById("h1titulo");
//pillarTitulo.style.textAlign ="center";
h1.textContent = "EJERCICIO DIM - DIM XLIV";
//document.querySelector('h1').style.color = 'blue';

const fecha = document.querySelector(".fecha");
fecha.insertAdjacentElement("beforebegin", h1);
let instanteActual = new Date();
/*let mesEscrito = MESES2[instanteActual.getMonth()]; 
const MESES2 = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]; */
fecha.textContent = 'Hoyo de Manzanares, ' + instanteActual.getDate() + ' de ' + 
instanteActual.getMonth() + ' de ' +  instanteActual.getFullYear();

const barraNavegacion = document.querySelector("nav");

const primerEnlace = document.createElement('a');
primerEnlace.setAttribute("href", "index.html");
let textoPrimerEnlace = document.createTextNode("HOME");
primerEnlace.appendChild(textoPrimerEnlace);

const segundoEnlace = document.createElement('a');
let textoSegundoEnlace = document.createTextNode("Página web del DIM");
segundoEnlace.appendChild(textoSegundoEnlace);
segundoEnlace.setAttribute("href", "https://web.institutomilitar.com");

barraNavegacion.insertAdjacentElement("afterbegin", primerEnlace);
primerEnlace.insertAdjacentElement("afterend", segundoEnlace);

barraNavegacion.style.textAlign = "center";

/* 5.- ELIMINAR el párrafo que tiene en el texto la 
palabra TRES */
/* Aquí se muestra en la consola los hijos que tiene la clase parrafos */
console.log(document.querySelector('.parrafos').children);
/* Variable que selecciona la clase párrafos */
let parrafosSelector = document.querySelector('.parrafos');
/* Aquí borro el anterior al último */
console.log(parrafosSelector.lastElementChild.previousSibling.remove());
/* Aquí borro el anterior al último */
parrafosSelector.lastElementChild.previousSibling.remove();
/* Muestro de nuevo los hijos y se comprueba que se borra uno */
console.log(document.querySelector('.parrafos').children);

/* 6.- Cambiar el color del texto a azul al párrafo que 
tiene la palabra DOS */
parrafosSelector.lastElementChild.previousSibling.previousSibling.setAttribute("id", "idDos");
document.getElementById('idDos').style.color='blue';

/* <section class="listas">
        <h3>LISTAS</h3>
      </section>
7.- Despúes del elemento <h3>LISTAS</h3>, inserte DOS 
listas ordenadas que comiencen en 100 a partir del array 
MESES.Para insertar la primera lista, utilice template 
literals.Y para insertar la segunda lista, utilice una 
expresión de función (arrow function), los meses deben 
aparecer enorden descendente, en este caso utilice 
algún método insertAdjacent*()  */
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
/*
let listasSelector = document.querySelector('.listas');
console.log(listasSelector.getAttribute());
listasSelector.firstChild.setAttribute("id", "idListas");
html = `<ol start="100"> 
          <li> ${ MESES[0] } </li>
          <li> ${ MESES[1] } </li>
          <li> ${ MESES[2] } </li>
          <li> ${ MESES[3] } </li>
        </ol>`;

console.log('html = ', html);
document.getElementById('idListas').innerHTML = html;

//document.getElementById('app').innerHTML = html;*/








/* 8.- Modifique el footer para que tenga un color de 
fondo (el que quiera) y permanezca fijo en la pantalla, 
es decir, no se mueva al hacer scroll en la pantalla.*/
// He metido el Bootstrap

let selectorFooter = document.querySelector('footer');
selectorFooter.style.backgroundColor='blue';
selectorFooter.textContent='Hola, soy un footer';
/*
selectorFooter.setAttribute("position", "absolute");
selectorFooter.setAttribute("bottom", "20px");
selectorFooter.setAttribute("top", "20px");*/
/*
selectorFooter.setAttribute("class", "fixed-bottom");*/

/* 9.-  <p>
            Sexo: <input type="radio" name="sexo" value="H" /> Hombre
            <input type="radio" name="sexo" value="M" /> Mujer
          </p>
Modifique el elemento para que la opción por defecto sea 'Hombre'
          */

let selectorEncuesta2 = document.querySelector('.encuesta');
console.log(selectorEncuesta2);
console.log(document.getElementsByName('sexo'));
let seleccionHombre = document.getElementsByName('sexo')[0];
seleccionHombre.setAttribute('checked','');

/* 10.- <input  type="checkbox" id="fcheckbox" name="futbol" />
Modifique el elemento para que cuando el usuario ponga 
el puntero del ratón encima de la casilla de verificación
aparezca el mensaje emergente '¿Estás segur@?' */

const ASEGURARSE = document.getElementById('fcheckbox');
console.log(ASEGURARSE);
ASEGURARSE.setAttribute("title", "¿Estás seguro?");
