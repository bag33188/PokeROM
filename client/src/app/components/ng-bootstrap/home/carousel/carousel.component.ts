import { Component, OnInit } from '@angular/core';
import he from 'he';
import CarouselSlide from 'src/app/interfaces/CarouselSlide';
import Images from '../../../../enums/images.enum';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: typeof Images;
  carouselData: CarouselSlide[] = [];

  ngOnInit() {
    this.images = Images;
    this.carouselData = [
      {
        img: this.images.IMG1,
        heading: he.decode('Now Introducing a New Pok&eacute;mon ROMs Website'),
        details: he.decode('For All Core Pok&eacute;mon Games')
      },
      {
        img: this.images.IMG2,
        heading: `Including Let's Go Games`,
        details: he.decode(`This database includes ROMs for Pok&eacute;mon Let's Go Pikachu &amp;
        Eevee`)
      },
      {
        img: this.images.IMG3,
        heading: 'Now with ROM Hacks',
        details: he.decode('You can now play your favorite Pok&eacute;mon ROM hacks')
      }
    ];
  }
}
