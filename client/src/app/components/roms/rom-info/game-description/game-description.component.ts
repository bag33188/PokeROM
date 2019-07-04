import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../../models/Rom';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit {
  @Input() rom: Rom;

  constructor() { }

  ngOnInit() {
  }

  isRomHack(gameName: string): boolean {
    return (/ROM Hack/g.test(gameName)) ? true : false;
  }

}
