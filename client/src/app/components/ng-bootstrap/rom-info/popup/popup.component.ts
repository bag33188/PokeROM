import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rom-info-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() rom_type: string;
  @Input() game_name: string;
  isRomHack: boolean;
  romHackTxtIdentifier: RegExp;

  constructor() {}

  ngOnInit(): void {
    this.romHackTxtIdentifier = /(?:(\s?)(\(ROM Hack\)))/i;
    setTimeout((): boolean => (this.isRomHack = this.rom_type === 'hack'), 555);
  }

  removeRomHackText(game_name: string): string {
    return game_name.replace(this.romHackTxtIdentifier, '');
  }
}
