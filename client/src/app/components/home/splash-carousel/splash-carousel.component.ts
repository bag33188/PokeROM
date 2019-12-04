import { Component, OnInit } from '@angular/core';
import { CarouselSlide } from '../../../interfaces/CarouselSlide';
import { Images } from '../../../enums/images.enum';
import { UnitConversionService } from '../../../services/unit-conversion.service';

@Component({
  selector: 'home-splash-carousel',
  templateUrl: './splash-carousel.component.html',
  styleUrls: ['./splash-carousel.component.scss']
})
export class SplashCarouselComponent implements OnInit {
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
        heading: `Pok${SplashCarouselComponent.eacute}mon Sword and Shield now available!`,
        caption: `The new Pok${SplashCarouselComponent.eacute}mon games are now available on this website.`
      },
      {
        image: this.images.C_IMG2,
        heading: `Includes Pok${SplashCarouselComponent.eacute}mon Let's Go Games`,
        caption: `This database includes ROMs for Pok${SplashCarouselComponent.eacute}mon Let's Go Pikachu & Eevee`
      }
      // {
      //   image: this.images.C_IMG3,
      //   heading: `Now with Pok${SplashCarouselComponent.eacute}mon ROM Hacks`,
      //   caption: `You can now play some of the coolest Pok${SplashCarouselComponent.eacute}mon ROM hacks.`
      // }
      // {
      //   image: this.images.C_IMG4,
      //   heading: `Grab all your core Pok${SplashCarouselComponent.eacute}mon Game ROMs here!`,
      //   caption: `This website's database houses all the core Pok${SplashCarouselComponent.eacute}mon game ROMs ever made.`
      // }
    ];
  }
  public getInterval(): number {
    return SplashCarouselComponent.interval;
  }
}
