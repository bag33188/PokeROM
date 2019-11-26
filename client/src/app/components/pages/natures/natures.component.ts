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
import { JSONObject } from '../../../models/JSONObject';

@Component({
  selector: 'app-natures',
  templateUrl: './natures.component.html',
  styleUrls: ['./natures.component.scss']
})
export class NaturesComponent implements OnInit, AfterContentInit {
  public natures: Nature[] = new Array<Nature>();
  public headers: string[];
  public icons: IconDefinition[];
  public faLeaf: IconDefinition;
  public faArrowUp: IconDefinition;
  public faArrowDown: IconDefinition;
  public faSignLanguage: IconDefinition;
  public faHeart: IconDefinition;
  public loading: boolean = true;
  public isError: boolean = false;

  constructor(private naturesService: NaturesService) {}

  ngOnInit(): void {
    this.faLeaf = faLeaf;
    this.faArrowDown = faArrowDown;
    this.faArrowUp = faArrowUp;
    this.faSignLanguage = faSignLanguage;
    this.faHeart = faHeart;
    this.setHeaders();
    this.setNatures();
  }

  ngAfterContentInit(): void {
    window.scrollTo(0, 0);
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

  private setNatures(): void {
    this.naturesService.getAllNatures().subscribe(
      (res: Nature[]): void => {
        this.natures = res;
        this.loading = false;
        this.isError = false;
      },
      (err: JSONObject): never => {
        this.loading = false;
        this.isError = true;
        throw err;
      }
    );
  }
}
