import { Component, OnInit, Input } from '@angular/core';
import { Nature } from '../../../models/Nature';
import {
  faArrowDown,
  faArrowUp,
  faHeart,
  faLeaf,
  faSignLanguage,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'natures-table',
  templateUrl: './natures-table.component.html',
  styleUrls: ['./natures-table.component.scss']
})
export class NaturesTableComponent implements OnInit {
  @Input('natureData') natures: Nature[];
  public headers: string[];
  public icons: IconDefinition[];
  public faLeaf: IconDefinition;
  public faArrowUp: IconDefinition;
  public faArrowDown: IconDefinition;
  public faSignLanguage: IconDefinition;
  public faHeart: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.faLeaf = faLeaf;
    this.faArrowDown = faArrowDown;
    this.faArrowUp = faArrowUp;
    this.faSignLanguage = faSignLanguage;
    this.faHeart = faHeart;
    this.setHeaders();
  }

  private setHeaders(): void {
    this.headers = [
      'Nature',
      'Increased Stat',
      'Decreased Stat',
      'Flavor',
      'Usage'
    ];
    this.icons = [
      this.faLeaf,
      this.faArrowUp,
      this.faArrowDown,
      this.faHeart,
      this.faSignLanguage
    ];
  }
}
