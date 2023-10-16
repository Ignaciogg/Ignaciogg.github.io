import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() imageUrl: any;
  @Input() title: any;
  @Input() description: any;
  @Input() tags: any;

  openProjectPopup() {
    
  }
}