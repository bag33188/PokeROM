import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../../models/Rom';
import { SizeConversionService } from '../../../../services/size-conversion.service';

@Component({
  selector: 'app-rom-specs',
  templateUrl: './rom-specs.component.html',
  styleUrls: ['./rom-specs.component.scss']
})
export class RomSpecsComponent implements OnInit {
  @Input() rom: Rom;

  constructor(public sizeConverter: SizeConversionService) {}

  ngOnInit() {}

  fileData(): [number, string] {
    const [fileSize, fileType]: [
      number,
      string
    ] = this.sizeConverter.convertSize(this.rom.fileSize);
    return [fileSize, fileType];
  }
}
