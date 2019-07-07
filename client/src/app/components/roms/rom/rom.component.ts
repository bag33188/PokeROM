import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../models/Rom';
import { SizeConversionService } from '../../../services/size-conversion.service';

@Component({
  selector: 'app-rom',
  templateUrl: './rom.component.html',
  styleUrls: ['./rom.component.scss']
})
export class RomComponent implements OnInit {
  @Input() rom: Rom;

  constructor(public sizeConverter: SizeConversionService) {}

  ngOnInit() {}

  imgAlt(altValue: string): string {
    return `${altValue
      .replace(/[\s:]/g, '-')
      .replace(/\xe9/g, 'e')
      .replace(/\'/g, '')}-box-art`;
  }

  fileData(): [number, string] {
    const [fileSize, fileType]: [number, string] = this.sizeConverter.convertSize(
      this.rom.fileSize
    );
    return [fileSize, fileType];
  }

  /**
   * @summary Checks the Pokemon Game.
   * @description Checks if the game is Pokemon Green, Pokemon Let's Go Pikachu, and/or Pokemon Lets Go Eevee.
   * @param altValue The alt value of the image.
   */
  checkGame(altValue: string): { [index: string]: boolean } {
    if (/pokemon\-(green\-version|lets-go)/i.test(altValue)) {
      return {
        'oversized-img': true,
        'card-img-top': true,
        'box-art-img': true
      };
    } else {
      return {
        'oversized-img': false,
        'card-img-top': true,
        'box-art-img': true
      };
    }
  }
}
