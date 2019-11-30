import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import {
  faLeaf,
  faArrowUp,
  faArrowDown,
  faSignLanguage,
  faHeart,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { Nature } from '../../models/Nature';
import { NaturesService } from '../../services/natures.service';
import { JSONObject } from '../../models/JSONObject';
import { Observable, Subscription } from 'rxjs';
import { LoggerService as logger } from '../../services/logger.service';

@Component({
  selector: 'natures',
  templateUrl: './natures.component.html',
  styleUrls: ['./natures.component.scss']
})
export class NaturesComponent implements OnInit, AfterContentInit, OnDestroy {
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
  private naturesObs$: Observable<Nature[]>;
  private naturesSub: Subscription;

  constructor(private naturesService: NaturesService) {}

  public ngOnInit(): void {
    this.faLeaf = faLeaf;
    this.faArrowDown = faArrowDown;
    this.faArrowUp = faArrowUp;
    this.faSignLanguage = faSignLanguage;
    this.faHeart = faHeart;
    this.getNatures();
    this.setHeaders();
  }

  public ngAfterContentInit(): void {
    window.scrollTo(0, 0);
  }

  public ngOnDestroy(): void {
    this.naturesSub.unsubscribe();
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

  private getNatures(): void {
    this.naturesObs$ = this.naturesService.getAllNatures();
    this.naturesSub = this.naturesObs$.subscribe(
      (res: Nature[]): void => {
        this.natures = res;
        this.loading = false;
        this.isError = false;
      },
      (err: JSONObject): void => {
        this.loading = false;
        this.isError = true;
        logger.error(err);
      }
    );
  }
}
