// BOM (Modelo de Objeto del Navegador)

// ABRIR LA CONSOLA Y VER LA DIFERENCIAS
// window es el Objeto Global del navegador, es el MÁS ALTO EN LA JERARQUÍA Y SE PUEDE OMITIR
// document es el punto de entrada a la pagina

console.log('Objeto Global window = ', window);
console.log('Tipo de dato de window = ', typeof(window));
console.log('¿window es Objeto? = ', window instanceof Object);
console.log('Objeto document = ', window.document);
console.log('Tipo de dato de document = ', typeof(window.document));
console.log('¿document es Objeto? = ', window.document instanceof Object);

// PROPIEDADES del objeto window
// NAVIGATOR, proporciona el objeto que contiene la información del navegador
console.warn('Objeto NAVIGATOR');
console.log('Objeto NAVIGATOR = ', navigator);
// Por razones de compatibilidad, todos los navegadores modernos devuelven "Mozilla".
console.log('Nombre del código del navegador = ', navigator.appCodeName); // deprecated
console.log('Nombre del navegador = ', navigator.appName); // deprecated
console.log('Version del navegador = ', navigator.appVersion); // deprecated
console.log('¿Las cookies están habilitadas? ', navigator.cookieEnabled);
console.log('Geolocalizacion = ', navigator.geolocation); 
console.log('Idioma del navegador = ', navigator.language);
console.log('¿El navegador está en línea? ', navigator.onLine); 
console.log('¿Para qué plataforma se compila el navegador? ', navigator.platform); // deprecated
console.log('Nombre del motor del navegador = ', navigator.product); // deprecated
//Devuelve el encabezado de agente de usuario enviado por el navegador al servidor
console.log('Encabezado de agente de usuario = ', navigator.userAgent); 

// SCREEN, proporciona el objeto que contiene información de la pantalla
console.warn('Objeto SCREEN');
console.log('Objeto SCREEN = ', screen);
console.log('Ancho total de la pantalla del usuario = ', screen.width);
console.log('Alto total de pantalla del usuario = ', screen.height);
// devuelve el ancho menos las características de la interfaz, como la barra de tareas de Windows.
console.log('Anchura disponible de la pantalla =', screen.availWidth); 
// devuelve la altura menos las características de la interfaz, como la barra de tareas de Windows.
console.log('Altura disponible de la pantalla = ', screen.availHeight); 
console.log('Profundidad de bits de la paleta de colores = ', screen.colorDepth + ' bits por pixel');
console.log('Resolucion de color de la pantalla = ', screen.pixelDepth  + ' bits por pixel');

// HISTORY, proporciona el objeto que contiene las URL visitadas por el usuario
console.warn('Objeto HISTORY');
console.log('Objeto HISTORY = ', history);
console.log('¿Cuántas páginas ha visitado el usuario? ', history.length); // devuelve el número de URL del historial
// carga la URL (página) anterior en la lista del historial.
//history.back();//anterior
// carga una URL (página) de la lista de historial.
//history.go(0); // recarga la página
//history.go(-1); // es lo mismo que history.back()
//history.go(1); // es lo mismo que history.forward
//history.go(-2);
//history.forward(); // carga la siguiente URL(pagina) en la lista del historial

// LOCACTION, proporciona el objeto que contiene información acerca de la URL actual
console.warn('Objeto LOCATION');
console.log('Objeto LOCATION = ', location);
console.log('Parte de anclaje = ', location.hash);
console.log('Host y puerto de la URL = ', location.host);
console.log('Nombre de host de la URL = ', location.hostname);
console.log('URL de la pagina actual = ', location.href);
console.log('Protocolo, host y numero de puerto = ', location.origin);
console.log('Ruta actual = ', location.pathname);
console.log('Numero de puerto de la URL actual = ', location.port);
console.log('Protocolo de la URL actual = ', location.protocol);
console.log('Cadena de consulta de la URL = ', location.search);



// LOCALSTORAGE, proporciona el objeto que le permite guardar pares clave/valor en el navegador
// ALMACENA DATOS SIN FECHA DE VENCIMIENTO
console.warn('Objeto LOCALSTORAGE');
console.log('Objeto LOCALSTORE = ', localStorage);
localStorage.setItem("curso", "DIM XLIV");
console.log('Objeto LOCALSTORE despues del setItem = ', localStorage);
console.log('Valor de la clave curso = ', localStorage.getItem("curso"));
localStorage.removeItem('curso');
console.log('Objeto LOCALSTORE después de removeItem = ', localStorage);
localStorage.clear();
console.log('Objeto LOCALSTORE después de clear = ', localStorage);


// SESSIONSTORAGE, proporciona el objeto que le permite guardar pares clave/valor en el navegador
// ALMACENA DATOS PARA UNA SOLA SESIÓN, LOS DATOS SE ELIMINAN CUANDO SE CIERRA EL NAVEGADOR
console.warn('Objeto SESSIONSTORAGE');
console.log('Objeto SESSIONSTORAGE = ', sessionStorage);
sessionStorage.setItem("user", "alumno");
sessionStorage.setItem("password", "alumnoDIM");
console.log('Objeto SESSIONSTORAGE despues del setItem = ', sessionStorage);
console.log('Valor de la clave user = ', sessionStorage.getItem('user'));
console.log('Valor de la clave password = ', sessionStorage.getItem("password"));
sessionStorage.removeItem('user');
console.log('Objeto SESSIONSTORAGE despues del removeItem(user)= ', sessionStorage);
sessionStorage.clear();
console.log('Objeto SESSIONSTORAGE despues del clear = ', sessionStorage);


// METODOS del objeto window
// alert(), muestra un cuadro de alerta con un mensaje y un boton Aceptar
// No es necesario poner window
alert('Hola DIM XLIV');
window.alert('Hola de nuevo DIM XLIV');


// open(), abre una nueva ventana en el navegador
// open(URL, name, specs, replace)
/*window.open() ==>
url: string;
name = target: string
specs = features?:string
repalace?: boolean

target ==>_blank, _parent, _self, _top
features ==> height=pixels, left=pixels, scrollbars=yes|no|1|0, titlebar=yes|no|1|0, toolbar=yes|no|1|0, top=pixels, width=pixels
*/

// close(), cierra una ventana
// specs, 
// replace deprecated
let myWindow;
function openWin() {
  myWindow = window.open("https://www.w3schools.com", "_blank", "top = 200, left = 2500, width=400, height=400");
}

function closeWin() {
  myWindow.close();
  clearTimeout(abrirVentana);
}

// A los 2 segundos se abre la ventana y a los 5 segundos se cierra
let abrirVentana = setTimeout(() => {
  openWin();
  setTimeout(() => {
    closeWin();
  }, 5000);
}, 2000);

//window.open("https://www.w3schools.com", "pepe", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=1500,width=400,height=400", replace = false);


// Ventana activada 
//  <button onclick="funcionTemporizador()" class="btn btn-primary">Pulsa Aquí</button>
let botones = document.querySelectorAll('button');
console.log('Botones = ', botones);
console.log('Propiedad classList de botones = ', botones.classList);
let arrayBotones = Array.from(botones);
console.log('Array Botones = ', arrayBotones);

let miVentana;
let crearBoton = document.querySelectorAll('button')[1];
console.log(crearBoton);

function miFuncion() {
  miVentana = window.open('https://torbe.es/wp-content/uploads/2013/06/12.gif', "_blank", "top = 200, left = 2500, width = 250, height = 250");
  crearBoton.classList.remove('d-none')  // con classList se accede a todas las clases
}

function cerrarVentana() {
  miVentana.close();
}



// confirm(), muestra un cuadro de diálogo con un mensaje, un botón aceptar y un botón cancelar.
// Devuelve true si el usuario hizo clic en Aceptar y false en caso contrario
if (confirm('¿Está seguro...?')) {
  console.log('Ha hecho clic en Aceptar');
} else {
  console.log('Ha hecho click en Cancelar');
}


// prompt(), muestra cuadro de dialogo que solicita al usuario que introduzca un dato
// devuelve el valor de la entrada si el usuario hace click en Aceptar y null en caso contrario
// DIM es el valor por defecto
let person = prompt("Nombre: ", "DIM");
if (person != null) {
  document.getElementById("saludo").innerHTML =
  "HOLA " + person + "  ¿QUE TAL?";
}



// TEMPORIZADORES
// setInterval, llama a una función a intervalos específicos 
// setInterval(function, milisegunodos, parametros1, parametros2, ...)
// setInterval(function, tiempo en ms) --> cada vez que pase el intervalo de tiempo se ejecuta la función
// clearInterval(), borra un temporizador establecido con setInterval()


// setTimeout, llama a una funciónn despues de una cantidad de tiempo
// setTimeOut (funcion, tiempo en ms) --> cuando pase el tiempo, se ejecuta una sola vez la funcion
// clearTimeout(), borra un temporizador establecido con setTimeout(), evita que la función se inicie

let gif;

function funcionTemporizador() {
  gif = setInterval(miFuncion, 3000);
}

function cerrarTemporizador() {
  clearInterval(gif);
  miVentana.close();
}





