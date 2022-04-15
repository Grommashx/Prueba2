// * Se crea el .js para todas las paginas esceptuando el Index * //

// INDEX
document.getElementById("btn__inicia-sesion").addEventListener("click", iniciar_sesion);
document.getElementById("btn__inicia-sesion-movil").addEventListener("click", iniciar_sesion);
document.getElementById("btn__registrate").addEventListener("click", register);
document.getElementById("btn__registrate-movil").addEventListener("click", register);

window.addEventListener("resize", anchoPagina);

//declaracion de variables
var contenedor    = document.querySelector(".sesion--box3");
var form_login    = document.querySelector(".sesion--form-login");
var form_register = document.querySelector(".sesion--form-register");
var text_login    = document.querySelector(".sesion--text-login");
var text_register = document.querySelector(".sesion--text-register");

function anchoPagina(){
  if(window.innerWidth > 991) {
    text_login.style.display    = "grid";
    text_register.style.display = "grid";
  }else {
    contenedor.style.left       = "0";
    form_login.style.display    = "block";
    form_register.style.display = "none";
    text_register.style.opacity = "1";
  }
};
anchoPagina();

function iniciar_sesion() {
  if(window.innerWidth > 991) {
    contenedor.style.left       = "1rem";
    form_login.style.display    = "block";
    form_register.style.display = "none";
    text_login.style.opacity    = "0";
    text_register.style.opacity = "1";
  }else {
    contenedor.style.left       = "0";
    form_login.style.display    = "block";
    form_register.style.display = "none";
  }
};
function register() {
  if(window.innerWidth > 991) {
    contenedor.style.left       = "40rem";
    form_login.style.display    = "none";
    form_register.style.display = "block";
    text_login.style.opacity    = "1";
    text_register.style.opacity = "0";
  }else {
    contenedor.style.left       = "0";
    form_login.style.display    = "none";
    form_register.style.display = "block";
    text_login.style.opacity    = "1";
  }
};