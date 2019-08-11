import { Component, OnInit, Input } from '@angular/core';
import {
  faCompactDisc,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { UnitConversionService } from '../../../../services/unit-conversion.service';

@Component({
  selector: 'app-rom-specs',
  templateUrl: './rom-specs.component.html',
  styleUrls: ['./rom-specs.component.scss']
})
export class RomSpecsComponent implements OnInit {
  @Input() fileType: string;
  @Input() fileSize: number;
  @Input() fileName: string;
  @Input() platform: string;
  faCompactDisc: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.faCompactDisc = faCompactDisc;
  }

  fileData(romFileSize: number): [number, string] {
    const [fileSize, fileType]: [
      number,
      string
    ] = UnitConversionService.convertRomSize(romFileSize);
    return [fileSize, fileType];
  }
}
