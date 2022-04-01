// Objeto DATE (FECHAS)
// Obtenemos la fecha actual (según la hora local)
// La hora local es la hora establecida por el ordenador donde se ejecuta JavaScript.
const FECHA1 = new Date();
console.log("FECHA1 (Objeto Fecha) = ", FECHA1);
console.log("FECHA1 (Fecha Local) = ", FECHA1.toLocaleDateString());
console.log("FECHA1 (UTC) = ", FECHA1.toUTCString());
console.log("FECHA1 (Fecha String)= ", FECHA1.toDateString());
console.log("FECHA1 (Hora String)= ", FECHA1.toTimeString());
console.log("FECHA1 (Objeto Fecha String) = ", FECHA1.toString());

// Obtenemos la fecha 30 de Enero de 2018, a las 23h 30m 14seg
const FECHA2 = new Date("2018/01/30 23:30:14");
console.log("FECHA2 = ", FECHA2.toUTCString());

// Obtenemos la fecha a partir del valor entero que representa el número
// de milisegundos desde las 00:00:00 UTC del 1 de enero de 1970.
const FECHA3 = new Date(872817240000);
console.log("FECHA3 = ", FECHA3.toUTCString());

// Creamos una fecha pasando cada uno de sus componentes numéricos*
// Como mínimo debemos pasar dos parámetros (year, month)
// new Date(y, m, d, h, min, s, ms);
const FECHA4 = new Date(2022, 03);
console.log("FECHA4 = ", FECHA4.toUTCString());
// Si indicamos valores negativos contabilizamos hacia atrás.
// Por ejemplo, con 2018, -1 estaríamos indicando diciembre de 2017.
// De la misma forma, 2018, 12 haría referencia a enero de 2019.
// Lo mismo ocurre con otros parámetros; 2018, 0, 32 haría referencia al 1 de febrero de 2018.

// CALCULAR EL TIEMPO TRANSCURRIDO
// usando métodos estáticos
let inicio = Date.now();
// el evento cuyo tiempo ha transcurrido aquí:
setTimeout(() => {
  let fin = Date.now();
  let transcurso = fin - inicio; // tiempo en milisegundos
  console.log("Tiempo transcurrido = ", transcurso);
}, 2000);

// si tiene objetos Date
inicio = new Date();
// el evento cuyo tiempo ha transcurrido aquí:
setTimeout(() => {
  fin = new Date();
  transcurso = fin.getTime() - inicio.getTime(); // tiempo en milisegundos
  console.log("Tiempo transcurrido = ", transcurso);
}, 3000);

// UTC y ZONAS HORARIAS
const FECHAHOY1 = new Date(); 
console.log('UTC fecha1 ', FECHAHOY1); 
// .getTimezoneOffset() devuelve la diferencia en minutos entre la hora local y la UTC
console.log('Diferencia horaria UTC ', FECHAHOY1.getTimezoneOffset()); // -60 (1 hora menos)
console.log('UTC Hora', FECHAHOY1.toTimeString()); 
console.log('Hora local ', FECHAHOY1.toLocaleTimeString()); 
//
const FECHAHOY2 = new Date("2018/01/30 23:15:30 GMT+0000"); // GTM+0000 no tiene diferencia horaria
// Recalcula y guarda la fecha en UTC
console.log('UTC fecha2 ', FECHAHOY2); 
console.log('Diferencia horaria UTC ', FECHAHOY2.getTimezoneOffset()); // -60 (1 hora menos)
console.log('UTC Hora', FECHAHOY2.toTimeString()); 
console.log('Hora local ', FECHAHOY2.toLocaleTimeString()); 


// GETTERS (obtener fechas)
console.log('GETTERS DATE');
let hoy = new Date();
console.log('Hoy = ', hoy);

// FECHA ESPECIFICA (AÑO, MES, DIA)
hoy  = new Date("2022/12/25");
console.log('Fecha especifica = ', hoy);
console.log('Indice del mes =', hoy.getMonth()); // devuelve el indice (0-enero, 1-febrero...)
console.log('Dia =', hoy.getDate()); // devuelve el dia
console.log('Dia de la semana =', hoy.getDay());  // devuelve el dia de la semana, 0 Domingo, 6 Sábado.
console.log('Año =', hoy.getFullYear());
console.log('Minutos =', hoy.getMinutes());
console.log('Horas =', hoy.getHours());// muy util para una aplicación que tenga que guardar el tiempo de un ejercicio
console.log('Milisegundos desde 01/01/1970 =', hoy.getTime());

// Javascript no tiene forma de devolver, por ejemplo, el día de la semana o el mes en formato de texto. 
const MESES = [
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
  ];
  const F = new Date();
  let mes = MESES[F.getMonth()]; // Devuelve el mes actual en formato de texto
  console.log('Mes actual = ', mes);
  
// SETTERS
console.log('SETTERS DATE');
console.log('Indice del AÑO =', hoy.setFullYear(2021)); 
console.log('Año (después del setter) =', hoy.getFullYear());
console.log('Fecha (después del setter) = ', hoy);
console.log('Fecha (después del setter) = ', hoy.toLocaleDateString());

let f = new Date("2018/01/30 15:30:10");
console.log('Fecha = ', f.toLocaleDateString());
f.setDate(15); // Cambia a 15/01/2018 15:30:10.999 (Devuelve 1516030210999)
console.log('Fecha (cambio dia a 15) = ', f.toLocaleDateString());
f.setMonth(1); // Cambia a 15/02/2018 15:30:10.999 (Devuelve 1518708610999)
console.log('Fecha (cambio mes a febrero)= ', f.toLocaleDateString());
f.setFullYear(2020); // Cambia a 15/02/2020 15:30:10.999 (Devuelve 1581780610999)
console.log('Fecha (cambio año a 2020)= ', f.toLocaleDateString());
f.setHours(20); // Cambia a 15/02/2020 20:30:10.999 (Devuelve 1581802210999)
console.log('Fecha = ', f);
console.log('Fecha (cambio horas a 20)= ', f.toLocaleString());
f.setMinutes(00); // Cambia a 15/02/2020 21:00:10.999 (Devuelve 1581800410999)
console.log('Fecha (cambio 00m)= ', f.toLocaleString());
f.setSeconds(3); // Cambia a 15/02/2020 21:00:03.999 (Devuelve 1581800403999)
console.log('Fecha (cambio a 3s)= ', f);
f.setMilliseconds(79); // Cambia a 15/02/2020 21:00:03.079 (Devuelve 1581800403079)
console.log('Fecha = ', f);
f.setTime(872817240000); // Cambia a 29/08/1997 02:14:00.000 (Devuelve 872817240000)
console.log('Fecha = ', f.toLocaleString());




