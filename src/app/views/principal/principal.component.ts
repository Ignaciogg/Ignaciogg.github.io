import { Component, ElementRef } from '@angular/core';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

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

  baluImages: CarouselImage[] = [
    {
      src: '../../../assets/img/BaluApp/balu1.webp',
      alt: 'Balu 1'
    },
    {
      src: '../../../assets/img/BaluApp/balu2.webp',
      alt: 'Balu 2'
    },
    {
      src: '../../../assets/img/BaluApp/balu4.webp',
      alt: 'Balu 3'
    },
    {
      src: '../../../assets/img/BaluApp/balu8.webp',
      alt: 'Balu 4'
    },
    {
      src: '../../../assets/img/BaluApp/balu11.webp',
      alt: 'Balu 5'
    },
    {
      src: '../../../assets/img/BaluApp/balu13.webp',
      alt: 'Balu 6'
    },
    {
      src: '../../../assets/img/BaluApp/balu14.webp',
      alt: 'Balu 7'
    },
    {
      src: '../../../assets/img/BaluApp/balu16.webp',
      alt: 'Balu 8'
    }
  ];

  go2Images: CarouselImage[] = [
    {
      src: '../../../assets/img/Go2TheTop/logo-GO2.webp',
      alt: 'Balu 1'
    }
  ];

  scrollToProyectos() {
    const proyectosElement = this.elementRef.nativeElement.querySelector('#proyectos');
    if (proyectosElement)
      proyectosElement.scrollIntoView({ behavior: 'smooth' });
  }
}
