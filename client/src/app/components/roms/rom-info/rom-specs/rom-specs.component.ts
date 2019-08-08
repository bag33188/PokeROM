import { Component, OnInit, Input } from '@angular/core';
import {
  faCompactDisc,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { Rom } from '../../../../models/Rom';
import { SizeConversionService } from '../../../../services/size-conversion.service';

@Component({
  selector: 'app-rom-specs',
  templateUrl: './rom-specs.component.html',
  styleUrls: ['./rom-specs.component.scss']
})
export class RomSpecsComponent implements OnInit {
  @Input() rom: Rom;
  faCompactDisc: IconDefinition;

  constructor(public sizeConverter: SizeConversionService) {}

  ngOnInit(): void {
    this.faCompactDisc = faCompactDisc;
  }

  fileData(romFileSize: number): [number, string] {
    const [file_size, file_type]: [
      number,
      string
    ] = this.sizeConverter.convertRomSize(romFileSize);
    return [file_size, file_type];
  }
}
