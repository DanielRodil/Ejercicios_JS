console.log("Ejercicio EXTRA ==> ");

let aleatorio = function () {
    return Math.floor((Math.random() * 44) + 1);
};

let h3 = document.querySelector("h3.titulo");

h3.innerHTML = "Curso DIM " + Math.floor((Math.random() * 44) + 1);