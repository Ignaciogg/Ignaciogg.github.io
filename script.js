// Seleccionar nav
function seleccionar(link){
  var opciones = document.querySelectorAll('#links  a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  link.className = "seleccionado";
}

// Animacióon ocultar-mostrar header
const header = document.getElementById("header");
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};

// Animación barra de skills
window.onscroll = function(){ 
  efectoHabilidades() 
};

function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300){
      document.getElementById("java").classList.add("barra-progreso1");
      document.getElementById("ai").classList.add("barra-progreso2");
      document.getElementById("py").classList.add("barra-progreso3");
      document.getElementById("db").classList.add("barra-progreso4");
      document.getElementById("html").classList.add("barra-progreso5");
  }
}