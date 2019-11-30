import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { RomsService } from '../../services/roms.service';
import { Rom } from '../../models/Rom';
import he from 'he';
import { JSONObject } from '../../models/JSONObject';
import { Observable, Subscription } from 'rxjs';
import { LoggerService as logger } from '../../services/logger.service';

@Component({
  selector: 'app-roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.scss']
})
export class RomsComponent implements OnInit, AfterContentInit, OnDestroy {
  public romsData: Rom[] = new Array<Rom>();
  public currentPage: number = 1;
  public itemsPerPage: number = 4;
  private pageSize: number;
  public loading: boolean = true;
  public noRomsMsg: string = '';
  private limit: number = 35;
  public isError: boolean = false;
  private romsObs$: Observable<Rom[]>;
  private romsSub: Subscription;

  private static jumpToTop(): void {
    window.scrollTo(0, 0);
  }

  constructor(private romsService: RomsService) {}

  public ngOnInit(): void {
    this.getRoms();
  }

  public ngAfterContentInit(): void {
    RomsComponent.jumpToTop();
  }

  public ngOnDestroy(): void {
    this.romsSub.unsubscribe();
  }

  private getRoms(): void {
    this.romsObs$ = this.romsService.getAllRoms({ limit: this.limit });
    this.romsSub = this.romsObs$.subscribe(
      (roms: Rom[]): void => {
        this.isError = false;
        roms.forEach((rom: Rom): void => {
          const { game_name, description }: Rom = rom;
          rom.game_name = he.decode(game_name);
          rom.description = he.decode(description);
        });
        this.romsData = roms;
        this.loading = false;
        if (!this.loading && this.romsData.length < 1) {
          this.noRomsMsg = 'No ROMs to Show';
        }
      },
      (err: JSONObject): void => {
        this.isError = true;
        this.loading = false;
        this.noRomsMsg = '';
        logger.error(err);
      }
    );
  }

  public onPageChange(paginateNum: number): void {
    this.pageSize = paginateNum;
    RomsComponent.jumpToTop();
  }
}
