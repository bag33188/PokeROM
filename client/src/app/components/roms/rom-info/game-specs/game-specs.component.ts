import { Component, OnInit, Input } from '@angular/core';
import { faGamepad, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-specs',
  templateUrl: './game-specs.component.html',
  styleUrls: ['./game-specs.component.scss']
})
export class GameSpecsComponent implements OnInit {
  @Input() public genre: string;
  @Input() public generation: number;
  @Input() public region: string;
  @Input() public dateReleased: Date;
  public faGamepad: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.faGamepad = faGamepad;
  }
}
