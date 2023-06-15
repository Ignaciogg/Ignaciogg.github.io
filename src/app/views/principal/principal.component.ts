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

    scrollToProyectos() {
      const proyectosElement = this.elementRef.nativeElement.querySelector('#proyectos');
      if (proyectosElement) {
        proyectosElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
