import {Component, OnInit, Input} from '@angular/core';
import {faInfo, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import Rom from '../../../models/Rom';
import NgClasses from '../../../interfaces/NgClasses';
import {SizeConversionService} from '../../../services/size-conversion.service';

@Component({
  selector: 'app-rom',
  templateUrl: './rom.component.html',
  styleUrls: ['./rom.component.scss']
})
export class RomComponent implements OnInit {
  @Input() rom: Rom;
  faInfo: IconDefinition;

  constructor(public sizeConverter: SizeConversionService) {
  }

  ngOnInit() {
    this.faInfo = faInfo;
  }

  imgAlt(altValue: string): string {
    return `${altValue
      .replace(/[\s:]/g, '-')
      .replace(/\xe9/g, 'e')
      .replace(/('|[\(\)])/g, '')}-box-art`;
  }

  fileData(romFileSize: number): [number, string] {
    const [fileSize, fileType]: [
      number,
      string
      ] = this.sizeConverter.convertRomSize(romFileSize);
    return [fileSize, fileType];
  }

  /**
   * @summary Checks the Pokemon Game.
   * @description Checks if the game is Pokemon Green, Pokemon Let's Go Pikachu, and/or Pokemon Lets Go Eevee.
   * @param altValue The alt value of the image.
   */
  applyClassesForGameImgSize(altValue: string): NgClasses {
    const overSizedImgClasses: NgClasses = {
      'oversized-img': true,
      'card-img-top': true,
      'box-art-img': true
    };
    const regularSizedImgClasses: NgClasses = {
      'oversized-img': false,
      'card-img-top': true,
      'box-art-img': true
    };
    switch (altValue.toLowerCase()) {
      case 'pokemon-green-version-jp-box-art':
        return overSizedImgClasses;
      case 'pokemon-lets-go-pikachu-box-art':
        return overSizedImgClasses;
      case 'pokemon-lets-go-eevee-box-art':
        return overSizedImgClasses;
      default:
        return regularSizedImgClasses;
    }
  }
}
