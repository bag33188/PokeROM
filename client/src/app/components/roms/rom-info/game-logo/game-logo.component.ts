import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-logo',
  templateUrl: './game-logo.component.html',
  styleUrls: ['./game-logo.component.scss']
})
export class GameLogoComponent implements OnInit {
  @Input() logoUrl: string;
  @Input() gameName: string;

  constructor() {}

  ngOnInit(): void {}

  imgAlt(altValue: string): string {
    return `${altValue.replace(/[\s:]/g, '-').replace(/\xe9/, 'e')}-logo`;
  }
}
