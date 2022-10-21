// Seleccionar nav
function seleccionar(link){
  var opciones = document.querySelectorAll('#links  a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  link.className = "seleccionado";
}

// Menú responsive
function responsiveMenu(){
  var x = document.getElementById("nav");
  if (x.className === ""){
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

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

// Cambio de idioma
function changeLanguage(lang){
  location.hash = lang;
  location.reload();
}
    
if (window.location.hash) { 
  if (window.location.hash == "#es"){
    location.href="indexES.html";
  } else if (window.location.hash == "#fr"){
    location.href="indexFR.html";
  } else if (window.location.hash == "#en"){
    location.href="index.html";
  }
}