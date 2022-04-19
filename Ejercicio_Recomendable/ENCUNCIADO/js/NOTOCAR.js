class Dato {
  constructor(descripcion, valor) {
    this.descripcion_= descripcion;
    this.valor_ = valor;
  }

  get descripcion() {
    return this.descripcion_;
  }

  set descripcion(string) {
    this.descripcion_ = string;
  }

  get valor() {
    return this.valor_;
  }
  
  set valor(valor) {
    this.valor_ = valor;
  }
}

class Egreso extends Dato {
  
  static contadorEgresos = 0;

  constructor(descripcion, valor) {
    /**
     *@function Constructor de la clase padre de la que hereda
     */
    super(descripcion, valor);
    /**
     * @description para ir generando los sitintos ingresos con id llmamos a la la propiedad de la Clase */
    this.id_= ++Egreso.contadorEgresos;
  }

  get id() {
    return this.id_;
  }
}

class Ingreso extends Dato {
  
  static contadorIngresos = 0;

  
  constructor(descripcion, valor) {
    /**
     *@function Constructor de la clase padre de la que hereda
     */
    super(descripcion, valor);
    /**
     * @description para ir generando los sitintos ingresos con id llmamos a la la propiedad de la Clase */
    this.id_= ++Ingreso.contadorIngresos;
  }
  
  get id() {
    return this.id_;
  }
}


 class EgresosProto {
  
  constructor() {
    this.egresos_ = [new Egreso("Alquiler Piso", 900), new Egreso("Ropa", 400)];
  }
  
  getEgresos() {
    return this.egresos_;
  }
}


let app = document.createElement("script");
app.src = "./js/app.js";
document.querySelector("script").insertAdjacentElement("afterend", app);

/**
 * @description creación script para vincular ionIcons, que son los iconos que se muestran en indes.html
 */
let ionIcon = document.createElement("script");
ionIcon.type = "module";
ionIcon.src = "https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js";
app.insertAdjacentElement("afterend", ionIcon);

/**
 * @constant para poder continuar con el examen si no ha resuelto apartado 2
 */
const INGRESOSPROTO = [
  new Ingreso("nomina", 2100.0),
  new Ingreso("venta coche", 1500),
];
/**
 * @constant para poder continuar con el examen si no ha resuelto apartado 3
 */
const EGRESOSPROTO = [
  new Egreso("Alquiler Piso", 900),
  new Egreso("Ropa", 400),
];

/**
 * @constant para poder continuar con el examen si no ha resuelto apartado 5
 */
const EGRESOSTOTAL = 1255;

/**
 * @constant para poder continuar con el examen si no ha resuelto apartado 5
 */
 const INGRESOSTOTAL = 3666;



