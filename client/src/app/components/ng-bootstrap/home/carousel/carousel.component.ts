import { Component, OnInit } from '@angular/core';
import he from 'he';
import CarouselSlide from 'src/app/interfaces/CarouselSlide';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] = [];
  carouselData: CarouselSlide[] = [];

  ngOnInit() {
    this.getImages(this.images);
    this.carouselData = [
      {
        img: this.images[0],
        heading: he.decode('Now Introducing a New Pok&eacute;mon ROMs Website'),
        details: he.decode('For All Core Pok&eacute;mon Games')
      },
      {
        img: this.images[1],
        heading: `Including Let's Go Games`,
        details: he.decode(`This database includes ROMs for Pok&eacute;mon Let's Go Pikachu &amp;
        Eevee`)
      },
      {
        img: this.images[2],
        heading: 'Now with ROM Hacks',
        details: he.decode('You can now play your favorite Pok&eacute;mon ROM hacks')
      }
    ];
  }

  getImages(imgArr: string[]): void {
    const path: string = '/assets/images/';
    for (let i: number = 0; i < 3; i++) {
      imgArr.push(`${path}carousel_img_0${i + 1}.png`);
    }
  }
}
