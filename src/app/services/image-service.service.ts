import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private backgroundImageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('footer.svg');
  public readonly backgroundImage$ = this.backgroundImageSubject.asObservable();

  constructor() {}

  public setBackgroundImage(imageName: string): void {
    this.backgroundImageSubject.next(imageName);
  }
}
