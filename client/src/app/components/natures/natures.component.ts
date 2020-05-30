import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class NaturesComponent implements OnInit, OnDestroy {
  public natures: Nature[];
  public loading: boolean;
  public isError: boolean;
  private naturesObs$: Observable<Nature[]>;
  private naturesSub: Subscription;

  constructor(private naturesService: NaturesService) {}

  public ngOnInit(): void {
    this.natures = new Array<Nature>();
    this.loading = true;
    this.isError = false;
    this.getNatures();
  }

  public ngOnDestroy(): void {
    this.naturesSub.unsubscribe();
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
