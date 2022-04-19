class Dato {
  /**
   *@constructor
   *@param {string}
   *@param {number}
   */
  constructor(descripcion, valor) {
    this.descripcion_ = descripcion;
    this.valor_ = valor;
  }

  /**
   * Settear propiedad descripcin
   * @returns {string}
   */
  get descripcion() {
    return this.descripcion_;
  }

  /**
   * Settear propiedad descripción
   * @returns void
   */
  set descripcion(string) {
    this.descripcion_ = string;
  }

  /**
   * getter propiedad valor
   * @returns {number}
   */
  get valor() {
    return this.valor_;
  }
  /**
   * Settear propiedad valor
   * @returns void
   */
  set valor(valor) {
    this.valor_ = valor;
  }
}

class Egreso extends Dato {
  /**
   *@static Se utiliza utiliza un identificador estático para asignar un valor único a cada objeto egreso que se cree.
   *@property  No se utiliza en el constructor para que sea independiente a la instancia
   */
  static contadorEgresos = 0;

  /**
   *@constructor
   *@param {string}
   *@param {number}
   */
  constructor(descripcion, valor) {
    /**
     *@function Constructor de la clase padre de la que hereda
     */
    super(descripcion, valor);
    /**
     * @description para ir generando los sitintos ingresos con id llmamos a la la propiedad de la Clase */
    this.id_ = ++Egreso.contadorEgresos;
  }

  /**
   * Recuperar la propiedad id de la Clase
   * @returns {number}
   */
  get id() {
    return this.id_;
  }
}

class Ingreso extends Dato {
  /**
   *@static Se utiliza utiliza un identificador estático para asignar un valor único a cada objeto ingreso que se cree.
   *@property  No se utiliza en el constructor para que sea independiente a la instancia y se vaya autogenerando con la construcción del objeto
   */
  static contadorIngresos = 0;

  /**
   *@constructor
   *@param {string}
   *@param {number}
   */
  constructor(descripcion, valor) {
    /**
     *@function Constructor de la clase padre de la que hereda
     */
    super(descripcion, valor);
    /**
     * @description para ir generando los sitintos ingresos con id llmamos a la la propiedad de la Clase */
    this.id_ = ++Ingreso.contadorIngresos;
  }

  /**
   * Recuperar la propiedad id de la Clase
   * @returns {number}
   */
  get id() {
    return this.id_;
  }
}

/**
 *@classdesc Clase con atributo estático de los egresos
 * */
class EgresosProto {

  /**
   *@constructor */
  constructor() {
    this.egresos_ = [new Egreso("Alquiler Piso", 900), new Egreso("Ropa", 400)];
  }
  /**
   * @function getter
   * @returns _egresos
   */
  getEgresos() {
    return this.egresos_;
  }
}
/**
 * @description creación script para vincular app, que es el archivo donde se va a responder el examen
 */
let app = document.createElement("script");
app.src = "./js/SOLUCION.js";
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



