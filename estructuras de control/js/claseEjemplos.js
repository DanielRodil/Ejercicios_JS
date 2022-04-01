//IF ELSE 
let edad = 18;
if (edad > 18) {
  console.log("Si puedes entrar en el Bar");
} else {
  console.log("No puedes entrar en el sitio");
}

// ELSE IF
let hora = 25;

if (hora > 0 && hora <= 10) {
  // recordar el && = and
  console.log("Buenos días");
} else if (hora > 10 && hora <= 18) {
  console.log("Buenas Tardes");
} else if (hora > 18 && hora <= 24) {
  console.log("Buenas Noches");
} else {
  console.log("Hora no Valida");
}

// Operador || = or
let efectivo = 300,
  credito = 700,
  disponible = efectivo + credito,
  totalCarrito = 500;

if (totalCarrito < efectivo || totalCarrito < credito || totalCarrito < disponible) {
  console.log("Puedo Pagar");
} else {
  console.log("No Puedo Pagar");
}

// Operador TERNARIO
let login = true;
console.log(login === true ? "Si ha hecho login" : "No ha hecho login");
