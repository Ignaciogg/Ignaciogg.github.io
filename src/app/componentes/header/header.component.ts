import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidebarMenu') sidebarMenu!: ElementRef;
  isMenuOpen = true;

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

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInsideMenu = this.sidebarMenu.nativeElement.contains(event.target);
    const sidebarMenuElement = this.sidebarMenu.nativeElement;
    const screenWidth = window.innerWidth;

    if (!clickedInsideMenu && screenWidth < 1050) {
      this.isMenuOpen = false;
      sidebarMenuElement.style.right = '0';
      sidebarMenuElement.style.transition = 'right 0.3s';
    }else{
      this.isMenuOpen = true;
      sidebarMenuElement.style.right = '-70%';
      sidebarMenuElement.style.transition = 'right 0.3s';
    }
  }

  recargarPagina() {
    if(this.router.url === '/') {
      window.location.reload();
    }else
      this.router.navigateByUrl('/');
  }
}
