// Cambiar de idioma usando JSON
$.getJSON("./lang.json", function(json){
  //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang", "en");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function(index, element){
    $(this).text(doc[lang][$(this).attr('key')]);
  });

  $('.translate').click(function(){
    localStorage.setItem("lang", $(this).attr('id')) ;
    var lang = $(this).attr('id');
    var doc = json;
      $('.lang').each(function(index, element){
        $(this).text(doc[lang][$(this).attr('key')]);
      });
  });
});

// Seleccionar nav
function seleccionar(link){
  var opciones = document.querySelectorAll('#links  a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  link.className = "seleccionado";
}

// Animación ocultar-mostrar header
const header = document.querySelector("header");
let prevScrollPos = window.pageYOffset;

window.onscroll = function(){
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    setTimeout(function() {
      header.classList.remove("hidden");
    }, 100);
  } else {
    setTimeout(function() {
      header.classList.add("hidden");
    }, 100);
  }
  prevScrollPos = currentScrollPos;

  efectoHabilidades() 
};

// Animación barra de skills
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