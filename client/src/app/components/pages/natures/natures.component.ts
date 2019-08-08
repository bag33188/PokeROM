import { Component, OnInit, AfterContentInit } from '@angular/core';
import {
  faLeaf,
  faArrowUp,
  faArrowDown,
  faSignLanguage,
  faHeart,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { Nature } from '../../../models/Nature';
import { NaturesService } from '../../../services/natures.service';
import { Images } from '../../../enums/images.enum';

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
  images: typeof Images = Images;
  loading: boolean = true;
  isError: boolean = false;

  constructor(private naturesService: NaturesService) {}

  ngOnInit(): void {
    this.faLeaf = faLeaf;
    this.faArrowDown = faArrowDown;
    this.faArrowUp = faArrowUp;
    this.faSignLanguage = faSignLanguage;
    this.faHeart = faHeart;
    this.setNatures();
    this.setHeaders();
  }

  ngAfterContentInit(): void {
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
        this.loading = false;
        this.isError = false;
      },
      (err: any): never => {
        this.loading = false;
        this.isError = true;
        throw err;
      }
    );
  }
}
