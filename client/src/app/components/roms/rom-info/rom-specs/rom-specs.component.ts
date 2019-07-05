import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../../models/Rom';

@Component({
  selector: 'app-rom-specs',
  templateUrl: './rom-specs.component.html',
  styleUrls: ['./rom-specs.component.scss']
})
export class RomSpecsComponent implements OnInit {
  @Input() rom: Rom;

  constructor() {}

  ngOnInit() {
  }

  convertSize(romSize: number): [number, string] {
    if (romSize > 1024 && romSize < 1000000) {
      return [parseFloat((romSize / 1000).toFixed(2)), 'MB'];
    } else if (romSize >= 1000000) {
      return [parseFloat((romSize / 1000000).toFixed(2)), 'GB'];
    } else {
      return [romSize, 'KB'];
    }
  }
}
