import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  constructor(
    private elementRef: ElementRef
  ) {}

    readyImages: String[] = [
      "../../../assets/img/ReadyRecipes/ready1.webp",
      "../../../assets/img/ReadyRecipes/ready2.webp",
      "../../../assets/img/ReadyRecipes/ready3.webp",
      "../../../assets/img/ReadyRecipes/ready4.webp",
      "../../../assets/img/ReadyRecipes/ready5.webp",
      "../../../assets/img/ReadyRecipes/ready6.webp",
      "../../../assets/img/ReadyRecipes/ready7.webp",
      "../../../assets/img/ReadyRecipes/ready8.webp",
      "../../../assets/img/ReadyRecipes/ready9.webp",
      "../../../assets/img/ReadyRecipes/ready10.webp",
  
    ]

    scrollToProyectos() {
      const proyectosElement = this.elementRef.nativeElement.querySelector('#proyectos');
      if (proyectosElement) {
        proyectosElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
