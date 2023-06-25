import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
    const responsiveHeader = document.querySelector('.hamburguesa') as HTMLElement | null;
    const sidebarMenu = document.querySelector('.sidebar-menu') as HTMLElement | null;
    
    if (responsiveHeader && sidebarMenu) {
      responsiveHeader.addEventListener('click', () => {
        sidebarMenu.classList.toggle('open');
      });
    }
  }

  recargarPagina() {
    window.location.reload();
  }
}
