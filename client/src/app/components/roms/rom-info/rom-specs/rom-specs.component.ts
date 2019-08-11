import { Component, OnInit, Input } from '@angular/core';
import {
  faCompactDisc,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { Rom } from '../../../../models/Rom';
import { UnitConversionService } from '../../../../services/unit-conversion.service';

@Component({
  selector: 'app-rom-specs',
  templateUrl: './rom-specs.component.html',
  styleUrls: ['./rom-specs.component.scss']
})
export class RomSpecsComponent implements OnInit {
  @Input() rom: Rom;
  faCompactDisc: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.faCompactDisc = faCompactDisc;
  }

  fileData(romFileSize: number): [number, string] {
    const [file_size, file_type]: [
      number,
      string
    ] = UnitConversionService.convertRomSize(romFileSize);
    return [file_size, file_type];
  }
}
