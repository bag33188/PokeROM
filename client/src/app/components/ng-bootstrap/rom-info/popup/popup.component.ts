import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rom-info-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() public romType: string;
  @Input() public gameName: string;
  public isRomHack: boolean;
  private romHackTxtIdentifier: RegExp;

  constructor() {}

  ngOnInit(): void {
    this.romHackTxtIdentifier = /(?:(\s?)(\(ROM Hack\)))/i;
    setTimeout((): boolean => (this.isRomHack = this.romType === 'hack'), 555);
  }

  public removeRomHackText(gameName: string): string {
    return gameName.replace(this.romHackTxtIdentifier, '');
  }
}
