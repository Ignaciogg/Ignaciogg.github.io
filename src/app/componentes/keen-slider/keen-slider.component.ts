import { Component, ElementRef, ViewChild, Input, Renderer2 } from "@angular/core"
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: "keen-slider",
  templateUrl: "./keen-slider.component.html",
  styleUrls: [
    "../../../../node_modules/keen-slider/keen-slider.min.css",
    "./keen-slider.component.scss",
  ],
})
export class KeenSliderComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef;
  @Input() images: String[] = [];

  opacities: number[] = []
  slider: KeenSliderInstance | null = null;
  currentSlide: number = 1;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        slides: this.images.length,
        loop: true,
        defaultAnimation: {
          duration: 3000,
        },

        detailsChanged: (s) => {
          this.opacities = s.track.details.slides.map((slide) => slide.portion)
        },
      })
    })
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  toggleFullscreen() {
    const sliderElement = this.elementRef.nativeElement.querySelector('.fader');
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (sliderElement.requestFullscreen) {
        sliderElement.requestFullscreen();
      } else if (sliderElement.mozRequestFullScreen) {
        sliderElement.mozRequestFullScreen();
      } else if (sliderElement.webkitRequestFullscreen) {
        sliderElement.webkitRequestFullscreen();
      } else if (sliderElement.msRequestFullscreen) {
        sliderElement.msRequestFullscreen();
      }
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen)
      document.exitFullscreen()
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
