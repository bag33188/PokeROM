import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../../models/Rom';

@Component({
  selector: 'app-game-download',
  templateUrl: './game-download.component.html',
  styleUrls: ['./game-download.component.scss']
})
export class GameDownloadComponent implements OnInit {
  @Input() rom: Rom;

  constructor() { }

  ngOnInit() {
  }

}
