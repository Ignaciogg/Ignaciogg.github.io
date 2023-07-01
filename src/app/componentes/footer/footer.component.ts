import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentBackgroundImage: string = "footer.svg";

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.backgroundImage$.subscribe(imageName => {
      this.currentBackgroundImage = imageName;
    });
  }

  getFooterClass(): string {
    return this.currentBackgroundImage === 'footer.svg' ? 'svg-footer' : 'svg-footer2';
  }
}
