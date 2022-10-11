//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("java").classList.add("barra-progreso1");
        document.getElementById("ai").classList.add("barra-progreso2");
        document.getElementById("py").classList.add("barra-progreso3");
        document.getElementById("db").classList.add("barra-progreso4");
        document.getElementById("html").classList.add("barra-progreso5");
    }

}

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }
    
  // Check if a hash value exists in the URL
  if (window.location.hash) {
    
    if (window.location.hash == "#es") {
      location.href="indexES.html";
    } else if (window.location.hash == "#fr") {
      location.href="indexFR.html";
    } else if (window.location.hash == "#en") {
      location.href="index.html";
    }
  }