import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../../models/Rom';

@Component({
  selector: 'app-game-download',
  templateUrl: './game-download.component.html',
  styleUrls: ['./game-download.component.scss']
})
export class GameDownloadComponent implements OnInit {
  @Input() rom: Rom;
  btnDisabled: boolean;

  constructor() {}

  ngOnInit() {
    this.disableBtnIfMobileOrTablet();
  }

  disableBtnIfMobileOrTablet(): boolean {
    if (
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      /Android/i.test(navigator.userAgent)
    ) {
      this.btnDisabled = true;
      return true;
    } else {
      this.btnDisabled = false;
      return false;
    }
  }
}
