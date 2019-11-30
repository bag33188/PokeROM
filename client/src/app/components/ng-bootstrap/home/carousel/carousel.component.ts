import { Component, OnInit } from '@angular/core';
import { CarouselSlide } from '../../../../interfaces/CarouselSlide';
import { Images } from '../../../../enums/images.enum';
import { UnitConversionService } from '../../../../services/unit-conversion.service';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private static readonly eacute: string = '\u00E9';
  private static interval: number = UnitConversionService.convertSecondsToMilliseconds(
    4.8
  );
  public images: typeof Images;
  public carouselData: CarouselSlide[];

  constructor() {}

  public ngOnInit(): void {
    this.images = Images;
    this.carouselData = [
      {
        image: this.images.C_IMG1,
        heading: `Pok${CarouselComponent.eacute}mon Sword and Shield now available!`,
        caption: `The new Pok${CarouselComponent.eacute}mon games are now available on this website.`
      },
      // {
      //   image: this.images.C_IMG2,
      //   heading: `Includes Pok${CarouselComponent.eacute}mon Let's Go Games`,
      //   caption: `This database includes ROMs for Pok${CarouselComponent.eacute}mon Let's Go Pikachu & Eevee`
      // },
      // {
      //   image: this.images.C_IMG3,
      //   heading: `Now with Pok${CarouselComponent.eacute}mon ROM Hacks`,
      //   caption: `You can now play some of the coolest Pok${CarouselComponent.eacute}mon ROM hacks.`
      // },
      {
        image: this.images.C_IMG4,
        heading: `Grab all your core Pok${CarouselComponent.eacute}mon Game ROMs here!`,
        caption: `This website's database houses all the core Pok${CarouselComponent.eacute}mon game ROMs ever made.`
      }
    ];
  }
  public getInterval(): number {
    return CarouselComponent.interval;
  }
}
