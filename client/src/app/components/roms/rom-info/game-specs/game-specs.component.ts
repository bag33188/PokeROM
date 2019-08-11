import { Component, OnInit, Input } from '@angular/core';
import { faGamepad, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-specs',
  templateUrl: './game-specs.component.html',
  styleUrls: ['./game-specs.component.scss']
})
export class GameSpecsComponent implements OnInit {
  @Input() genre: string;
  @Input() generation: number;
  @Input() region: string;
  @Input() dateReleased: Date;
  faGamepad: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.faGamepad = faGamepad;
  }
}
