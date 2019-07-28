import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() romType: string;
  @Input() gameName: string;
  isRomHack: boolean;
  romHackTxtIdentifier: RegExp;

  constructor() {
  }

  ngOnInit() {
    this.romHackTxtIdentifier = /(?:(\s?)(\(ROM Hack\)))/i;
    setTimeout(
      (): boolean =>
        (this.isRomHack = this.romType === 'hack'),
      555
    );
  }

  removeRomHackText(gameName: string): string {
    return gameName.replace(this.romHackTxtIdentifier, '');
  }
}
