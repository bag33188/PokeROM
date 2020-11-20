import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  faLongArrowAltLeft,
  faFileAlt,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { RomsService } from '../../../services/roms.service';
import { Rom } from '../../../models/Rom';
import { JSONObject } from '../../../models/JSONObject';
import { Observable, Subscription } from 'rxjs';
import { LoggerService as logger } from '../../../services/logger.service';

@Component({
  selector: 'roms-rom-info',
  templateUrl: './rom-info.component.html',
  styleUrls: ['./rom-info.component.scss']
})
export class RomInfoComponent implements OnInit, OnDestroy {
  public rom: Rom;
  private id: string;
  public loading: boolean;
  public isError: boolean;
  public faLongArrowAltLeft: IconDefinition;
  public errStatusCode: number;
  private romInfoObs$: Observable<Rom>;
  private romInfoSub: Subscription;
  public finishedLoading: boolean;

  constructor(
    private romService: RomsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.finishedLoading = false;
    this.loading = true;
    this.faLongArrowAltLeft = faLongArrowAltLeft;
    this.id = this.route.snapshot.paramMap.get('id');
    this.isError = false;
    this.rom = new Rom();
    this.getRom(this.id);
  }

  public ngOnDestroy(): void {
    this.romInfoSub.unsubscribe();
  }

  private getRom(id: string): void {
    this.romInfoObs$ = this.romService.getRom(id);
    this.romInfoSub = this.romInfoObs$.subscribe(
      (rom: Rom): void => {
        if (!rom.genre) {
          rom.genre = 'N/A';
        }
        this.rom = rom;
        this.loading = false;
        this.isError = false;
      },
      (err: JSONObject): void => {
        this.loading = false;
        this.isError = true;
        const statusKey: string = 'status';
        if (err[statusKey] !== undefined) {
          switch (err[statusKey]) {
            case 404:
              this.errStatusCode = 404;
              break;
            case 401:
              this.errStatusCode = 401;
              break;
            case 403:
              this.errStatusCode = 403;
              break;
            default:
              this.errStatusCode = 500;
          }
        }
        logger.error(err);
      },
      (): true => (this.finishedLoading = true)
    );
  }
}
