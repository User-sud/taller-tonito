// 1. selecciono el titulo
const titulo = document.querySelector('.titulo');

// 2. escucho el clic
titulo.addEventListener('click', function() {
// 3 cambio el estilo
titulo.style.color = "cyan";
});

const oscuro = document.querySelector('.modo-oscuro');

oscuro.addEventListener('click', function(){
 document.body.classList.toggle('dark-mode');
});


const menu = document.querySelector(".menu-lateral");
const btnAbrir = document.querySelector(".boton-abrir");
const btnCerrar = document.querySelector(".boton-cerrar");

// Abrir el menú
btnAbrir.addEventListener("click", () => {
  menu.classList.add("abierto");
});

// Cerrar el menú
btnCerrar.addEventListener("click", () => {
  menu.classList.remove("abierto");
});