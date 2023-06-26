import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

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
    if(this.router.url === '/') {
      window.location.reload();
    }else
      this.router.navigateByUrl('/');
  }
}
