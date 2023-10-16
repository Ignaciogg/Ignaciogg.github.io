import { Component, Input } from '@angular/core';

interface TimelineItem {
  color: string;
  nombre: string;
  ano: string;
  descripcion: string;
}

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() items: TimelineItem[];

  constructor() {
    this.items = [];
  }
}