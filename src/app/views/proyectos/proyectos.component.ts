import { Component, ElementRef } from '@angular/core';

interface CarouselImage {
  src: string;
  alt: string;
}

interface TagGroup {
  tag: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  paginaActual: number = 1;
  proyectoActualIndex: number = 0;

  constructor(
    private elementRef: ElementRef
  ) {}

  proyectos = [
    {
      titulo: "ReadyRecipes",
      descripcion: `Aplicación web con Front-end Angular y Back-end Laravel que muestra y filtra recetas de cocina extraídas de YouTube mediante Web-Scraping.</br></br>
      Cada receta cuenta con su transcripción, su categoría seleccionada mediante Inteligencia Artificial y un análisis de sentimientos efectuado sobre los comentarios, obteniendo la media de positividad sobre cada receta.</br></br>
      Las fuentes que hemos utilizado, aparte de YouTube son <a href="https://es.openfoodfacts.org/">OpenFoodFacts</a> y <a href="https://soysuper.com/">SoySuper.com</a>, que nos han servido para extraer datos interesantes de cada receta como sus ingredientes, su precio y su valor nutriscore.`,
      tags: ["Angular", "Laravel", "Web Scraping", "Análisis de Sentimientos"],
      images: [
        { src: "@/assets/img/ReadyRecipes/ready1.webp", alt: "Ready 1" },
        { src: "@/assets/img/ReadyRecipes/ready4.webp", alt: "Ready 4" },
        { src: "@/assets/img/ReadyRecipes/ready5.webp", alt: "Ready 5" }
      ]
    },
    {
      titulo: "Go2TheTop",
      descripcion: `Aplicación realizada con JavaFX conectada a una Base de Datos SQL y a su vez a un dispositivo Arduino Uno encargado de leer el oxígeno en sangre y la frecuencia cardíaca de un usuario. Con este proyecto, buscamos aportar un sistema interconectado y personalizable de pulseras para equipos de deportistas que deseen medir la intensidad de sus entrenamientos.`,
      tags: ["Java", "Arduino"],
      images: [
        { src: "@/assets/img/Go2TheTop/logoGO2.webp", alt: "Logo GO2" },
        { src: "@/assets/img/Go2TheTop/sensor1.webp", alt: "Sensor 1" }
      ]
    }
    // Agrega más proyectos aquí
  ];

  get proyectoActual() {
    return this.proyectos[this.proyectoActualIndex];
  }

  cambiarProyecto(direccion: number) {
    this.proyectoActualIndex =
      (this.proyectoActualIndex + direccion + this.proyectos.length) % this.proyectos.length;
  }
}
