import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'roms-info-game-logo',
  templateUrl: './game-logo.component.html',
  styleUrls: ['./game-logo.component.scss']
})
export class GameLogoComponent implements OnInit {
  @Input() public logoUrl: string;
  @Input() public gameName: string;

  constructor() {}

  public ngOnInit(): void {}

  public imgAlt(altValue: string): string {
    return `${altValue.replace(/[\s:]/g, '-').replace(/\xE9/, 'e')}-logo`;
  }
}
