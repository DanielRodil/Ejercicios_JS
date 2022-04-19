/* 1. (2 puntos) El archivo es `estilos.css` no está vinculado al `index.html` interactúe con el `DOM` para que apliquen los estilos `css`.   
_Nota: Si no consigue lo solicitado en este apartado, descomente la línea 8 de `index.html` para poder continuar el examen correctamente, este caso la valoración de este apartado será de 0 (cero) puntos. */

let estilo = document.createElement('link');
estilo.href = './css/estilos.css';
estilo.setAttribute('rel', 'stylesheet');
document.head.appendChild(estilo);

/* 2. (2 puntos) Declare una variable llamada `ingresos` que será una array de dos elementos, ambos serán objetos de tipo `Ingreso`,  el primero tendrá como `descripcion` el `string` `Nomina` y `valor` el `number` `2100.00`,  el segundo tendrá como `descripcion` el `string` `Venta Coche` y `valor` el `number` `1500`.    */
const ingresos = [
  new Ingreso("Nomina", 2100.0),
  new Ingreso("Venta Coche", 1500)
];

/* 3. (2 puntos) Declare una variable llamada `egresos` que debe apuntar a la propiedad de la  clase `EgresosProto`. */
const egresos =  new EgresosProto().getEgresos(); 


/* 4. (4 puntos) Durante el desarrollo de la aplicación necesitará acceder al DOM para modificar dinámicamente los ingresos y egresos por lo que el valor de `Presupuesto disponible`, `ingresos`, `egresos` y `porcentaje` irá cambiando según vayamos modificando nuestro presupuesto. Declare las varibles necesarias  para que apunten a cada uno de los `div` que habrá que modificar. */
const PRESUPUESTO = document.getElementsByClassName("presupuesto_valor")[0];
const ENTRADAS = document.getElementById("ingresos");
const SALIDAS = document.querySelector("#egresos");
const PORCENTAJE = document.querySelector(".presupuesto_egreso--porcentaje");

/**
 * @function funcion que se desencadena al cargar la página, en index.html en la linea 10, (`<body onload="cargarApp()">`), está configurado evento asociado a esta función. 
 */
let cargarApp = () => {
  actualizarDatos();
  /* 11. (3 puntos) Cuando se cargue el `<body>` del `index.html` se deben cargar las listas de egresos e ingresos. _Nota: utilice los métodos ya implementados_ */ 
  cargarIngresos();
  cargarEgresos();
};

/* 5. (5 puntos) Realice un médodo que se llame `totalMovimientos` que se le pueda pasar por parámetros `movimientos` (`ingresos` o `egresos`) y devuelva el valor toltal de los movimientos pasados por parámetro */
function totalMovimientos(movimientos) {
  let total = 0;
  movimientos.forEach((movimiento) => {
    total += movimiento.valor;
  });
  return total;
}

/* 6. Complete el  método `actualizarDatos()` para que:  */
function actualizarDatos() {
  /* 6.1. (3 puntos) Declare un variable que se llame `totalPresupuesto` que apunte al valor de nuestro presupuesto disponible _Nota: apoyese en el método totalMovimientos que implemento anteriormente. **Si no ha conseguido realizar el método `totalMovimientos` puede usar la constantes `EGRESOSTOTAL` `INGRESOSTOTAL`**_   */
  let totalPresupuesto = totalMovimientos(ingresos) - totalMovimientos(egresos);
  /*6.2. (3 puntos) Declare un variable que se llame `porcentajeEgreso` que apunte a la relacion de `egresos` entre `ingresos` (egresos / ingresos) _Nota: apoyese en el método totalMovimientos que implemento anteriormente. **Si no ha conseguido realizar el método `totalMovimientos` puede usar la constantes `EGRESOSTOTAL` `INGRESOSTOTAL`**_  */
  let porcentajeEgresos =
    totalMovimientos(egresos) / totalMovimientos(ingresos);
  /* 6.3. (2 puntos) Utilizando `totalPresupuesto` y una de las variables que declaró en el apartado 4 modifique el valor que se muestra en el html en el apartado presupuesto disponible. */
  PRESUPUESTO.innerHTML = totalPresupuesto;
  /*6.4. (2 puntos) Utilizando `porcentajeEgresos` y una de las variables que declaró en el apartado 4 modifique el valor que se muestra en el html en el apartado porcentaje*/
  PORCENTAJE.innerHTML = formatoPorcetanje(porcentajeEgresos);
  /* 6.5 (2 puntos) Utilizando una de las variables que declaró en el apartado 4 modifique el valor que se muestra en el html en el apartado ingresos.  */
  ENTRADAS.innerHTML = totalMovimientos(ingresos);
  /* 6.6. (2 puntos)  Utilizando una de las variables que declaró en el apartado 4 modifique el valor que se muestra en el html en el apartado egresos.  */
  SALIDAS.innerHTML = totalMovimientos(egresos);
}

/* 7. (4 puntos) Realice un método que se llame `formatoPorcetanje` (fuera de `actualizarDatos()`) que se le pase por parámetros un valor y devuelva ese mismo valor en formato de porcentaje con aproximación a dos digitos. _Nota: javaScript tiene funciones nativas que hacen esto._   
    7.1. (2 puntos) Haga las modificaciones que crea convenientes para que el porcentaje de egresos respecto a ingresos se muestre en formato porcentaje con dos decimales. _Utilice el método que acaba de implementar en este apartado_  */

function formatoPorcetanje(valor) {
  return valor.toLocaleString("es-ES", {
    style: "percent",
    minimumFractionDigits: 3,
  });
}


/* 8. (5 puntos) Realice el método `crearIngresoHTML(valor)` para que sustituya los elementos html que se encuentran entre las líneas 57 y  67  así se podrá generar dinámicamente los ingresos que vamos teniendo. _Nota= Si utiliza template Literals le facilitará la tarea_ */

function crearIngresoHTML(valor) {
  return `
  <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${valor.descripcion}</div>
  <div class="alinear limpiarEstilos">
      <div class="elemento_valor">+ ${valor.valor}</div>
      <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
              <ion-icon name='close-circle-outline' onclick ='eliminarIngreso(${valor.id})'></ion-icon>
          </button>
      </div>
  </div>
</div>
  `;
}

/* 9. (4 puntos) Se quiere que se muestre al usuario el listado de ingresos que ha realizado, para ello, complete  el siguiente método para que se muestre una lista con los ingresos: */
function cargarIngresos() {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.querySelector("#lista-ingresos").innerHTML = ingresosHTML;
};

/* 10. (7 puntos) De forma similar a los ingresos cree los métodos  que crea necesarios para que se muestre la lista de egresos. */

function cargarEgresos() {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresosHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

function crearEgresosHTML(egreso) {
  return `    <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${egreso.descripcion}</div>
  <div class="alinear limpiarEstilos">
      <div class="elemento_valor">- ${egreso.valor}</div>
      <div class="elemento_porcentaje">${formatoPorcetanje(
        egreso.valor / totalMovimientos(egresos)
      )}</div>
      <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
              <ion-icon name='close-circle-outline' onclick ='eliminarEgreso(${egreso.id})'></ion-icon>
          </button>
      </div>
  </div>
  </div>`;
}

/* 12. (4 puntos) Si ha obsevado la `Clase Egreso` y la `Clase Ingreso` ambas tienen una propiedad `estatica` llamada `id`que tiene por finalidad ir añadiendo un identificador a cada Dato (`Ingreso` y `Egreso`). Complete el método `eliminarIngreso(id)` `eliminarEgreso(id)` para que cada vez que se desencadene el manejador `onClick` que hay en las etiquetas `<ion-icon>` elimine un `ingreso` o un `egreso`.  
    1. (4 puntos) Después de eliminar un ingreso o un egreso, se deben actualizar los datos y volver a cargar los egresos o ingresos dependiendo que se elimine. _Nota: apóyese en los metodos que ya ha implementado_ */

function eliminarIngreso(id) {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  actualizarDatos();
  cargarIngresos();
}

function eliminarEgreso(id) {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  actualizarDatos();
  cargarEgresos();
}

/* 13. (2 puntos) En el formulario de egresos/ingresos el valor seleccionado por defecto debe ser ingreso _Nota: no puede hacer ninguna modificación en `index.html`_ */
document.getElementsByTagName('option')[1].setAttribute('selected', '');

/* 14. En este apartado se trabajará con el formulario que está entre las líneas 39 y 50 del `index.html`, se pide que implemente:
    14.1. (4 puntos) Sin hacer modificaciones en el `index.html` programe un evento que al pulsar la tecla `Enter` en cualquier parte del `<body>` desencadene el método `setForm` */

document.body.addEventListener('keypress', setForm)
  
/*14.1. Aparte del evento que ya programo , complete el método `setForm` según las siguientes instrucciones:
14.1.1. (3 puntos)  Declare la variables `tipo`, `descripcion` y `valor` para qe apunten alos valores que el usuario va introduciendo en el formulario. 
14.1.2 (7 puntos) Desarrolle una secuencia de control para que se tenga encuenta si es un ingreso o un egreso, se añadan a la lista correspondiente y se actualicen todos los datos (Presupuesto Disponible, cuantia total Ingresos, cuantia total Egresos, porcentaje de egros frente ingresos, lista de Ingresos y lista de egresos)*/
function setForm (evento) {
  let form = document.forms['form'];
  let tipo = form['tipo']
  let descripcion = form['descripcion'];
  let valor = form['valor'];
  if(evento.key == 'Enter') {
    if(descripcion.value !== '' && valor.value) {
      if(tipo.value == 'ingreso') {
        ingresos.push(new Ingreso(descripcion.value, +valor.value))/*  +valor.value es una sintaxis simplificada es como poner Number(valor.value)*/
        actualizarDatos();
        cargarIngresos();
      } else if(tipo.value === 'egreso') {
        egresos.push(new Egreso(descripcion.value, +valor.value));
        actualizarDatos();
        cargarEgresos();
      }
    }
  }
}

/* 15.  (4 puntos) Implemente un evento de una forma distinta a la que haya utilizado en el apartado anterior, que al hacer `dobleclick` en cualquier parte del `<body>` se abra una ventana emergente cada tres segundos con las siguientes características:
    1. (2 puntos) Debe mostrar la página https://dinerojs.com/
    1. (2 puntos) Debe aparecer a `200px` de la parte superior de la pantalla y a `2500px` de la izquierda 
    1. (2 puntos) Sus dimensiones deben ser de `500px` por `500px`; */   
let ventana;
function abrirVentana() {
  ventana = window.open('https://dinerojs.com/', "_blank", "top = 200, left = 2500, width = 500, height = 500")
}

function cerrarVentana() {
  ventana.close();
}

let ventanaEmergente;
function funcionTemporizador() {
  ventanaEmergente = setInterval(abrirVentana, 2000);
}

document.body.ondblclick = funcionTemporizador;


function cerrarTemporizador() {
  clearTimeout(ventanaEmergente);
  cerrarVentana();
  console.log('Ventanas emergentes eliminadas');
}

/* 16. (5 puntos) Cuando se pulse la barra `espaciadora`  las ventanas emergentes deben parar de aparecer y mostrarse en la consola el siguiente texto `Ventanas emergentes eliminadas` */
document.body.addEventListener('keypress', function(evento) {
  if(evento.key == ' ') cerrarTemporizador();
});