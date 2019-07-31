import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../../models/Rom';

@Component({
  selector: 'app-game-logo',
  templateUrl: './game-logo.component.html',
  styleUrls: ['./game-logo.component.scss']
})
export class GameLogoComponent implements OnInit {
  @Input() rom: Rom;

  constructor() {}

  ngOnInit() {}

  imgAlt(altValue: string): string {
    return `${altValue.replace(/[\\s:]/g, '-').replace(/\\xe9/g, 'e')}-logo`;
  }
}
