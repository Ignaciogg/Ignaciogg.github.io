import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  paginaActual: number = 1;
  proyectoActualIndex: number = 0;
  currentVideoUrl: string | null = null;
  isVerticalVideo: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  proyectos = [
    {
      titulo: "EasyWorkout",
      descripcion: `EasyWorkout es una aplicación móvil diseñada para simplificar el seguimiento y la planificación de hábitos saludables, abordando la necesidad de individualización en la dieta y el ejercicio.</br></br>
      Desarrollada a través de Microsoft Power Platform y potenciada por la Inteligencia Artificial, ofrece un registro detallado de ejercicios, alimentos y su impacto ambiental.</br></br>
      El proyecto aspira a llenar el vacío en el mercado de aplicaciones de salud y fitness, proporcionando una solución automatizada mediante técnicas de Web-Scraping y adaptada al contexto español que promueve un estilo de vida activo y equilibrado.</br></br>
      Los resultados incluyen el diseño y desarrollo de la aplicación con funcionalidades avanzadas de análisis de sentimiento y extracción de datos.`,
      tags: ["Microsoft Power Platform", "Web Scraping", "Inteligencia Artificial"],
      images: [],
      videoUrl:  "https://youtube.com/shorts/PD3LmMie-wo?si=S7UvFtqTHnL83q5K"
    },
    {
      titulo: "ReadyRecipes",
      descripcion: `Página web con Front-end Angular y Back-end Laravel que muestra y filtra recetas de cocina extraídas de YouTube mediante Web-Scraping.</br></br>
      Cada receta cuenta con su transcripción, su categoría seleccionada mediante Inteligencia Artificial y un Análisis de sentimientos efectuado sobre los comentarios, obteniendo la media de positividad sobre cada receta.</br></br>
      Las fuentes que hemos utilizado, aparte de YouTube, son <a href="https://es.openfoodfacts.org/">OpenFoodFacts</a> y <a href="https://soysuper.com/">SoySuper.com</a>, que nos han servido para extraer datos interesantes de cada receta como sus ingredientes, su precio y su valor nutriscore.`,
      tags: ["Angular", "Laravel", "Web Scraping", "Análisis de Sentimientos"],
      images: [
        { src: "assets/img/ReadyRecipes/ready1.webp", alt: "Ready 1" },
        { src: "assets/img/ReadyRecipes/ready4.webp", alt: "Ready 4" },
        { src: "assets/img/ReadyRecipes/ready5.webp", alt: "Ready 5" }
      ],
      videoUrl: null
    },
    {
      titulo: "Go2TheTop",
      descripcion: `Aplicación realizada con JavaFX conectada a una Base de Datos SQL y a su vez a un dispositivo Arduino Uno encargado de leer el oxígeno en sangre y la frecuencia cardíaca de un usuario. 
      Con este proyecto, buscamos aportar un sistema interconectado y personalizable de pulseras para equipos de deportistas que deseen medir la intensidad de sus entrenamientos.`,
      tags: ["Java", "Arduino", "SQL"],
      images: [],
      videoUrl:  "https://youtu.be/l7p3eqgvFyw?si=efYBs6SonblopVmT"
    }
    // Agrega más proyectos aquí
  ];

  get proyectoActual(){
    return this.proyectos[this.proyectoActualIndex];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id >= 0 && id < this.proyectos.length) {
        this.proyectoActualIndex = id;
        this.currentVideoUrl = this.transformYouTubeUrl(this.proyectos[id].videoUrl);
        console.log('Transformed URL on init:', this.currentVideoUrl);
      }
    });
  }

  cambiarProyecto(direccion: number) {
    this.proyectoActualIndex =
      (this.proyectoActualIndex + direccion + this.proyectos.length) % this.proyectos.length;
    const nuevoVideoUrl = this.transformYouTubeUrl(this.proyectoActual.videoUrl);
    if (nuevoVideoUrl !== this.currentVideoUrl) {
      this.currentVideoUrl = nuevoVideoUrl;
      console.log('Transformed URL on change:', this.currentVideoUrl);
    }
    this.router.navigate(['/proyectos', this.proyectoActualIndex], { replaceUrl: true });
  }

  private transformYouTubeUrl(url: string | null): string | null {
    if (!url) return null;
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url;
  }

  private checkIfVerticalVideo(url: string | null): boolean {
    if (!url) return false;
    return url.includes('shorts');
  }
}