import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links: any = [
    {
      src: 'https://www.linkedin.com/in/ignacio-gil-garzon/',
      name: 'Linkedin'
    },
    {
      src: 'https://github.com/ignaciogg',
      name: 'Github'
    },
    {
      src: 'mailto:nachogilgarzon@gmail.com',
      name: 'Contacto'
    }
  ];
}
