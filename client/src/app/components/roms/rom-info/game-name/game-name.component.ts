import { Component, OnInit, Input } from '@angular/core';
import { Rom } from '../../../../models/Rom';

@Component({
  selector: 'app-game-name',
  templateUrl: './game-name.component.html',
  styleUrls: ['./game-name.component.scss']
})
export class GameNameComponent implements OnInit {
  @Input() rom: Rom;

  constructor() {}

  ngOnInit() {}
}
