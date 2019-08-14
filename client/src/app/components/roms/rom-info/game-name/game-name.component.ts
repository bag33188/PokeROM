import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-name',
  templateUrl: './game-name.component.html',
  styleUrls: ['./game-name.component.scss']
})
export class GameNameComponent implements OnInit {
  @Input() public gameName: string;
  @Input() public romType: string;

  constructor() {}

  ngOnInit(): void {}
}
