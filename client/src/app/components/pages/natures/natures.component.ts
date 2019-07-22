import {Component, OnInit, AfterContentInit} from '@angular/core';
import {
  faLeaf,
  faArrowUp,
  faArrowDown,
  faSignLanguage,
  faHeart,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import Nature from '../../../models/Nature';
import {NaturesService} from '../../../services/natures.service';

@Component({
  selector: 'app-natures',
  templateUrl: './natures.component.html',
  styleUrls: ['./natures.component.scss']
})
export class NaturesComponent implements OnInit, AfterContentInit {
  natures: Nature[] = [];
  headers: string[];
  icons: IconDefinition[];
  faLeaf: IconDefinition;
  faArrowUp: IconDefinition;
  faArrowDown: IconDefinition;
  faSignLanguage: IconDefinition;
  faHeart: IconDefinition;

  constructor(private naturesService: NaturesService) {
  }

  ngOnInit() {
    this.faLeaf = faLeaf;
    this.faArrowDown = faArrowDown;
    this.faArrowUp = faArrowUp;
    this.faSignLanguage = faSignLanguage;
    this.faHeart = faHeart;
    this.setNatures();
    this.setHeaders();
  }

  ngAfterContentInit() {
    window.scrollTo(0, 0);
  }

  setHeaders(): void {
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

  setNatures(): void {
    this.naturesService.getAllNatures().subscribe(
      (res: Nature[]): void => {
        this.natures = res;
      },
      (err: any): never => {
        throw err;
      }
    );
  }
}
