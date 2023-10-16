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

  constructor(
    private elementRef: ElementRef
  ) {}

  readyImages: CarouselImage[] = [
    {
      src: '../../../assets/img/ReadyRecipes/ready1.webp',
      alt: 'Ready 1'
    },
    {
      src: '../../../assets/img/ReadyRecipes/ready4.webp',
      alt: 'Ready 4'
    },
    {
      src: '../../../assets/img/ReadyRecipes/ready5.webp',
      alt: 'Ready 5'
    },
    {
      src: '../../../assets/img/ReadyRecipes/ready6.webp',
      alt: 'Ready 6'
    },
    {
      src: '../../../assets/img/ReadyRecipes/ready7.webp',
      alt: 'Ready 7'
    },
    {
      src: '../../../assets/img/ReadyRecipes/ready8.webp',
      alt: 'Ready 8'
    },
    {
      src: '../../../assets/img/ReadyRecipes/ready9.webp',
      alt: 'Ready 9'
    },
    {
      src: '../../../assets/img/ReadyRecipes/ready10.webp',
      alt: 'Ready 10'
    }
  ];

  readyTags: TagGroup[] = [
    {
      tag: 'Angular'
    },
    {
      tag: 'Laravel'
    },
    {
      tag: 'Web Scraping'
    },
    {
      tag: 'Análisis de Sentimientos'
    }
  ];

  descripcionReady: string = "Aplicación web con Front-end Angular y Back-end Laravel que muestra y filtra recetas de cocina extraídas de YouTube mediante Web-Scraping."+'</br></br>'+"Cada receta cuenta con su transcripción, su categoría seleccionada mediante Inteligencia Artificial y un análisis de sentimientos efectuado sobre los comentarios, obteniendo la media de positividad sobre cada receta."+'</br></br>'+"Las fuentes que hemos utilizado, aparte de YouTube son " + '<a href="https://es.openfoodfacts.org/">OpenFoodFacts</a>' + " y " + '<a href="https://soysuper.com/">SoySuper.com</a>' + ", que nos han servido para extraer datos interesantes de cada receta como sus ingredientes, su precio y su valor nutriscore.";

}
