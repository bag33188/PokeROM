import { Component, OnInit } from '@angular/core';
import he from 'he';
import { CarouselSlide } from '../../../../interfaces/CarouselSlide';
import { Images } from '../../../../enums/images.enum';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: typeof Images;
  carouselData: CarouselSlide[];

  constructor() {}

  ngOnInit(): void {
    this.images = Images;
    this.carouselData = [
      {
        image: this.images.C_IMG1,
        heading: he.decode('Now Introducing a New Pok&eacute;mon ROMs Website'),
        caption: he.decode('For All Core Pok&eacute;mon Games')
      },
      {
        image: this.images.C_IMG2,
        heading: he.decode(`Including Pok&eacute;mon Let's Go Games`),
        caption: he.decode(`This database includes ROMs for Pok&eacute;mon Let's Go Pikachu &amp;
        Eevee`)
      },
      {
        image: this.images.C_IMG3,
        heading: he.decode('Now with Pok&eacute;mon ROM Hacks'),
        caption: he.decode(
          'You can now play your favorite Pok&eacute;mon ROM hacks'
        )
      },
      {
        image: this.images.C_IMG4,
        heading: he.decode('Pok&eacute;mon Sword and Shield Coming Soon!'),
        caption: he.decode(
          'The new Pok&eacute;mon games will be available on this site 1 week after their release in the US.'
        )
      }
    ];
  }
}
