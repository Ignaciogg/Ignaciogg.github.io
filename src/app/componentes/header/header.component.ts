import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidebarMenu') sidebarMenu!: ElementRef;
  isMenuOpen = true;
  currentBackgroundImage = 'footer.svg';

  constructor(
    private router: Router,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    const responsiveHeader = document.querySelector('.hamburguesa') as HTMLElement | null;
    const sidebarMenu = document.querySelector('.sidebar-menu') as HTMLElement | null;
    document.documentElement.style.setProperty('--colorBack', "#323239");

    if (responsiveHeader && sidebarMenu) {
      responsiveHeader.addEventListener('click', () => {
        sidebarMenu.classList.toggle('open');
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const responsiveHeader = document.querySelector('.hamburguesa') as HTMLElement | null;
    const sidebarMenu = document.querySelector('.sidebar-menu') as HTMLElement | null;

    if (responsiveHeader && sidebarMenu && responsiveHeader.contains(event.target as Node)) {
      this.isMenuOpen = !this.isMenuOpen;
      sidebarMenu.classList.toggle('open', this.isMenuOpen);
    } else {
      this.isMenuOpen = false;
      sidebarMenu?.classList.remove('open');
    }
  }

  recargarPagina() {
    if (this.router.url === '/') {
      window.location.reload();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  cambiarColor(): void {
    const newBackgroundImage = this.currentBackgroundImage === 'footer.svg' ? 'footer2.svg' : 'footer.svg';
    this.imageService.setBackgroundImage(newBackgroundImage);
    this.currentBackgroundImage = newBackgroundImage;

    if (document.documentElement.style.getPropertyValue('--colorBack') === "#323239") {
      document.documentElement.style.setProperty('--colorBack', "#e6e6e6");
      document.documentElement.style.setProperty('--colorTextoBlanco', "rgb(16 16 16)");
      document.documentElement.style.setProperty('--colorContainerGris', "#7e7e7e");
      document.documentElement.style.setProperty('--colorHeader', "rgba(50, 50, 57, 0.3)");
      document.documentElement.style.setProperty('--colorSombra', "rgba(0, 0, 0, 0.1)");
    } else {
      document.documentElement.style.setProperty('--colorBack', "#323239");
      document.documentElement.style.setProperty('--colorTextoBlanco', "rgb(233, 233, 233)");
      document.documentElement.style.setProperty('--colorContainerGris', "#7e7e7e");
      document.documentElement.style.setProperty('--colorHeader', "#323239");
      document.documentElement.style.setProperty('--colorSombra', "rgba(255, 255, 255, 0.1)");
    }
  }
}
