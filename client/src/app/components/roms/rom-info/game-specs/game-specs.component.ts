import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../../models/Rom';

@Component({
  selector: 'app-game-specs',
  templateUrl: './game-specs.component.html',
  styleUrls: ['./game-specs.component.scss']
})
export class GameSpecsComponent implements OnInit {
  @Input() rom: Rom;

  constructor() {}

  ngOnInit() {
  }

}
