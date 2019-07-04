import { Component, OnInit, Input } from '@angular/core';
import { String, StringBuilder } from 'typescript-string-operations';
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
    return String.Format(
      '{0}-logo',
      altValue.replace(/[\s:]/g, '-').replace(/\xe9/g, 'e')
    );
  }
}
