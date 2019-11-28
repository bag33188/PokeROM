import { Component, OnInit, Input } from '@angular/core';
import { faInfo, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Rom } from '../../../models/Rom';
import { NgClasses } from '../../../interfaces/NgClasses';
import { UnitConversionService } from '../../../services/unit-conversion.service';

@Component({
  selector: 'app-rom',
  templateUrl: './rom.component.html',
  styleUrls: ['./rom.component.scss']
})
export class RomComponent implements OnInit {
  @Input() public rom: Rom;
  public faInfo: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.faInfo = faInfo;
  }

  public imgAlt(altValue: string): string {
    return `${altValue
      .replace(/[\s:]/g, '-')
      .replace(/\xE9/g, 'e')
      .replace(/('|[()])/g, '')}-box-art`;
  }

  public fileSizeData(romFileSize: number): [number, string] {
    const [fileSize, fileType]: [
      number,
      string
    ] = UnitConversionService.convertRomSize(romFileSize);
    return [fileSize, fileType];
  }

  /**
   * @summary Checks the Pokemon Game.
   * @description Checks if the game is Pokemon Green, Pokemon Let's Go Pikachu, and/or Pokemon Lets Go Eevee.
   * @param altValue The alt value of the image.
   */
  public applyClassesForGameImgSize(altValue: string): NgClasses {
    const overSizedImgClasses: NgClasses = {
      'oversized-img': true,
      'card-img-top box-art-img': true
    };
    const regularSizedImgClasses: NgClasses = {
      'oversized-img': false,
      'card-img-top box-art-img': true
    };
    const oversizedImages: string[] = [
      'pokemon-green-version-jp-box-art',
      'pokemon-lets-go-pikachu-box-art',
      'pokemon-lets-go-eevee-box-art',
      'pokemon-sword-version-box-art',
      'pokemon-shield-version-box-art'
    ];
    return oversizedImages.includes(altValue.toLowerCase())
      ? overSizedImgClasses
      : regularSizedImgClasses;
  }

  public romanize(generation: number): string | number {
    return UnitConversionService.convertIntegerToRomanNumeral(generation);
  }
}
