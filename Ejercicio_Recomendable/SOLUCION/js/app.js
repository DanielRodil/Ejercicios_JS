/**
 * @function función que se desencadena al cargar la página, en index.html en la linea 10, (`<body onload="cargarApp()">`), está configurado evento asociado a esta función. 
 */
let cargarApp = () => {
  actualizarDatos();
};

function actualizarDatos() {
  console.log('body cargado');
}

