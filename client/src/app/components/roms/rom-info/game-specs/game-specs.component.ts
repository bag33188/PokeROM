import { Component, OnInit, Input } from '@angular/core';
import { faGamepad, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Rom } from '../../../../models/Rom';

@Component({
  selector: 'app-game-specs',
  templateUrl: './game-specs.component.html',
  styleUrls: ['./game-specs.component.scss']
})
export class GameSpecsComponent implements OnInit {
  @Input() rom: Rom;
  faGamepad: IconDefinition;

  constructor() {}

  ngOnInit() {
    this.faGamepad = faGamepad;
  }
}
