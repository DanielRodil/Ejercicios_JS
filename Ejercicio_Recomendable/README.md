1. (2 puntos) El archivo de `estilos.css` no está vinculado al `index.html`, interactúe con el `DOM` para que se apliquen los estilos `css`.  
   _Nota: Si no consigue lo solicitado en este apartado, descomente la línea 9 de `index.html` para poder continuar el examen correctamente, en este caso la valoración de este apartado será de 0 (cero) puntos._
1. (2 puntos) Declare una variable llamada `ingresos` que será una array de dos elementos, ambos serán objetos de tipo `Ingreso`, el primero tendrá como `descripcion` el `string` `Nomina` y `valor` el `number` `2100.00`, el segundo tendrá como `descripcion` el `string` `Venta Coche` y `valor` el `number` `1500`.  
   _Nota: Si no ha conseguido realizar este apartado, haga que la variable `ingresos` apunte a la constante ya declarada `INGRESOSPROTO` para poder continuar el examen, en este caso la valoración de este apartado será de 0 (cero) puntos._
1. (3 puntos) Declare una variable llamada `egresos` que debe apuntar al valor que devuelve el único método de la clase `EgresosProto`.
   _Nota: Si no ha conseguido realizar este apartado, haga que la variable `egresos` apunte a la constante ya declarada `EGRESOSPROTO` para poder continuar el examen, en este caso la valoración de este apartado será de 0 (cero) puntos._
1. (4 puntos) Durante el desarrollo de la aplicación necesitará acceder al DOM para modificar dinámicamente los ingresos y egresos por lo que el valor de `Presupuesto disponible`, `ingresos`, `egresos` y `porcentaje` irá cambiando según vayamos modificando nuestro presupuesto. Declare las varibles necesarias para que apunten a cada uno de los `div` que habrá que modificar su valor.
1. (5 puntos) Realice un médodo que se llame `totalMovimientos` que se le pueda pasar por parámetros `movimientos` (`ingresos` o `egresos`) y devuelva el valor total de los movimientos pasados por parámetro.
1. Complete el método `actualizarDatos()` para que:
   1. (3 puntos) Declare un variable que se llame `totalPresupuesto` que apunte al valor de nuestro presupuesto disponible. _Nota: apoyese en el método totalMovimientos que implemento anteriormente. **Si no ha conseguido realizar el método `totalMovimientos` puede usar la constantes `EGRESOSTOTAL` e `INGRESOSTOTAL ya declaradas`**_
   1. (3 puntos) Declare un variable que se llame `porcentajeEgreso` que apunte a la relacion de `egresos` entre `ingresos` (egresos / ingresos) _Nota: apoyese en el método totalMovimientos que implemento anteriormente. **Si no ha conseguido realizar el método `totalMovimientos` puede usar la constantes `EGRESOSTOTAL` `INGRESOSTOTAL`**_
   1. (2 puntos) Utilizando `totalPresupuesto` y una de las variables que declaró en el apartado 4 modifique el valor que se muestra en el html en el apartado presupuesto disponible.
   1. (2 puntos) Utilizando `porcentajeEgresos` y una de las variables que declaró en el apartado 4 modifique el valor que se muestra en el html en el apartado porcentaje.
   1. (2 puntos) Utilizando una de las variables que declaró en el apartado 4 modifique el valor que se muestra en el html en el apartado ingresos.
   1. (2 puntos) Utilizando una de las variables que declaró en el apartado 4 modifique el valor que se muestra en el html en el apartado egresos.
1. (4 puntos) Realice un método que se llame `formatoPorcetanje` (fuera de `actualizarDatos()`) que se le pase por parámetros un valor y devuelva ese mismo valor en formato de porcentaje con aproximación a tres decimales. _Nota: javaScript tiene funciones nativas que hacen esto._

   1. (2 puntos) Haga las modificaciones que crea convenientes para que el porcentaje de `egresos` respecto a `ingresos` se muestre en formato porcentaje con tres decimales. _Utilice el método que acaba de implementar en este apartado._

1. (5 puntos) Realice el método `crearIngresoHTML(valor)` para que sustituya los elementos html que se encuentran entre las líneas 56 y 66 así se podrá generar dinámicamente los ingresos que vamos teniendo. _Nota: Si utiliza template Literals le facilitará la tarea ya que las descripciones y valores de cada ingreso cambiará dinámicamente_

1. (4 puntos) Se quiere que se muestre al usuario el listado de ingresos que ha realizado, para ello, complete el siguiente método, sustituyendo las interrogaciones, para que se muestre una lista con los ingresos:
   ```javascript
       function cargarIngresos() {
           let ingresosHTML = "";
           for (let ingreso of ingresos) {
               ingresosHTML += crearIngresoHTML(??????);
           }
           document.querySelector("??????").innerHTML = ???????;
       }
   ```
1. (7 puntos) De forma similar a lo que ha hecho con los `ingresos` cree `cargarEgresos` y el método o métodos que crea necesario para que se muestre la lista de egresos.
1. (3 puntos) Cuando se cargue el `<body>` del `index.html` se deben cargar las listas de egresos e ingresos. _Nota: utilice los métodos ya implementados_
1. (4 puntos) Si ha obsevado la `Clase Egreso` y la `Clase Ingreso` ambas tienen una propiedad `estática` llamada `id` que tiene por finalidad ir añadiendo un identificador a cada Dato (`Ingreso` y `Egreso`). Complete los método `eliminarIngreso(id)` y `eliminarEgreso(id)` para que cada vez que se desencadene el manejador `onClick` que hay en las etiquetas `<ion-icon>` elimine un `ingreso` o un `egreso`.
   1. (4 puntos) Después de eliminar un ingreso o un egreso, se deben actualizar los datos y volver a cargar los egresos o ingresos dependiendo que se elimine. _Nota: apóyese en los metodos que ya ha implementado_
1. (2 puntos) En el formulario de egresos/ingresos el valor seleccionado por defecto debe ser ingreso. _Nota: no puede hacer ninguna modificación en `index.html`._

1. En este apartado se trabajará con el formulario que está entre las líneas 39 y 50 del `index.html`, se pide que implemente:

   1. (4 puntos) Sin hacer modificaciones en el `index.html` programe un evento que al pulsar la tecla `Enter` en cualquier parte del `<body>` desencadene el método `setForm`
   1. Aparte del evento que ya ha programado , complete el método `setForm` según las siguientes instrucciones:
      1. (3 puntos) Declare la variables `tipo`, `descripcion` y `valor` para qe apunten a los valores que el usuario va introduciendo en el formulario.
      1. (7 puntos) Debe controlar si en el formulario se introduce un ingreso o un egreso, en funcion de ello se añada a la lista correspondiente (ingresos o egresos) y se actualicen todos los datos (Presupuesto Disponible, cuantía total Ingresos, cuantía total Egresos, porcentaje de egresos frente ingresos, lista de Ingresos y lista de egresos) _Nota:En este apartado se solicita una secuencia de control y no un nuevo evento, apóyese en los métodos ya implementados_

1. (4 puntos) Implemente un evento de forma distinta a la que haya utilizado en el apartado anterior, que al hacer `dobleclick` en cualquier parte del `<body>` se abra una ventana emergente cada tres segundos con las siguientes características:
   1. (2 puntos) Debe mostrar la página https://dinerojs.com/
   1. (2 puntos) Debe aparecer a `200px` de la parte superior de la pantalla y a `2500px` de la izquierda
   1. (2 puntos) Sus dimensiones deben ser de `500px` por `500px`;
1. (5 puntos) Cuando se pulse la barra `espaciadora` las ventanas emergentes deben parar de aparecer y mostrarse en la consola el siguiente texto `Ventanas emergentes eliminadas`.