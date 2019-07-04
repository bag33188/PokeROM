import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../models/Rom';

@Component({
  selector: 'app-rom',
  templateUrl: './rom.component.html',
  styleUrls: ['./rom.component.scss']
})
export class RomComponent implements OnInit {
  @Input() rom: Rom;

  constructor() {}

  ngOnInit() {}

  imgAlt(altValue: string): string {
    return `${altValue.replace(/[\s:]/g, '-').replace(/\xe9/g, 'e')}-box-art`;
  }
}
