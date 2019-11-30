import { Component, OnInit, Input } from '@angular/core';
import {
  faCompactDisc,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { UnitConversionService } from '../../../../services/unit-conversion.service';

@Component({
  selector: 'roms-info-rom-specs',
  templateUrl: './rom-specs.component.html',
  styleUrls: ['./rom-specs.component.scss']
})
export class RomSpecsComponent implements OnInit {
  @Input() public fileType: string;
  @Input() public fileSize: number;
  @Input() public fileName: string;
  @Input() public platform: string;
  public faCompactDisc: IconDefinition;

  constructor() {}

  public ngOnInit(): void {
    this.faCompactDisc = faCompactDisc;
  }

  public fileSizeData(romFileSize: number): [number, string] {
    const [fileSize, fileType]: [
      number,
      string
    ] = UnitConversionService.convertRomSize(romFileSize);
    return [fileSize, fileType];
  }
}
