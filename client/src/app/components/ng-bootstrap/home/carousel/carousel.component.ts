import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] = [];

  ngOnInit() {
    this.loopImages(this.images);
  }

  loopImages(imgArr: string[]): void {
    const path = '/assets/images/';
    for (let i: number = 0; i < 3; i++) {
      imgArr.push(`${path}carousel_img_0${i + 1}.png`);
    }
  }
}
