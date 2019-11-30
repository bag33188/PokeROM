import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'roms-info-rom-hack-popup',
  templateUrl: './rom-hack-popup.component.html',
  styleUrls: ['./rom-hack-popup.component.scss']
})
export class RomHackPopupComponent implements OnInit {
  @Input() public romType: string;
  @Input() public gameName: string;
  @Input() public finishedLoading: boolean;
  public isRomHack: boolean;
  private romHackTxtIdentifier: RegExp;

  constructor() {}

  public ngOnInit(): void {
    this.romHackTxtIdentifier = /(?:(\s?)(\(ROM Hack\)))/i;
    if (this.finishedLoading) {
      this.isRomHack = this.romType === 'hack';
    }
  }

  public removeRomHackText(gameName: string): string {
    return gameName.replace(this.romHackTxtIdentifier, '');
  }
}
