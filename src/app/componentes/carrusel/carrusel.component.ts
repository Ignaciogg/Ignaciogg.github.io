import { Component, Input } from '@angular/core';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})

export class CarruselComponent {
  @Input() images: CarouselImage[];
  @Input() carouselId: string;
  @Input() activeIndex: number = 0;

  constructor() {
    this.images = [];
    this.carouselId = '';
  }
}
