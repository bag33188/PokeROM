import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RomsService } from '../../services/roms.service';
import { Rom } from '../../models/Rom';
import { JSONObject } from '../../models/JSONObject';
import { Observable, Subscription } from 'rxjs';
import { LoggerService as logger } from '../../services/logger.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { RouterExtService } from '../../services/router-ext.service';

type paginationState = [number, number, boolean];

@Component({
  selector: 'roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.scss']
})
export class RomsComponent implements OnInit, OnDestroy {
  public romsData: Rom[];
  public currentPage: number;
  public itemsPerPage: number;
  private pageSize: number;
  public loading: boolean;
  public noRomsMsg: string;
  private limit: number;
  public isError: boolean;
  private romsObs$: Observable<Rom[]>;
  private romsSub: Subscription;
  public favoritesShown: boolean;
  private static setPaginationState(state?: paginationState): void {
    if (!LocalStorageService.getState('paginationState') && !state) {
      LocalStorageService.setState('paginationState', [0, 1, false]);
    }
    if (state !== null && state !== undefined) {
      LocalStorageService.setState('paginationState', state);
    }
  }
  private static getPaginationState(): paginationState {
    return LocalStorageService.getState('paginationState') as paginationState;
  }
  constructor(
    private router: Router,
    private romsService: RomsService,
    private viewportScroller: ViewportScroller,
    private routerExtService: RouterExtService
  ) {}

  public ngOnInit(): void {
    this.currentPage = 1;
    this.itemsPerPage = 4;
    this.loading = true;
    this.noRomsMsg = '';
    this.limit = 35;
    this.isError = false;
    this.romsData = new Array<Rom>();
    if (
      (!this.routerExtService.getPreviousUrl().includes('/info') &&
        this.router.url === '/roms') ||
      document.readyState !== 'complete'
    ) {
      this.onPageChange([0, 1]);
      RomsComponent.setPaginationState([0, 1, false]);
    }
    RomsComponent.setPaginationState();

    const favoritesState: boolean = RomsComponent.getPaginationState()[2];
    this.getRoms(favoritesState);
    this.favoritesShown = favoritesState || false;
  }

  public ngOnDestroy(): void {
    this.romsSub.unsubscribe();
  }

  public getRoms(getFavorites?: boolean): void {
    if (getFavorites !== null && getFavorites !== undefined) {
      this.favoritesShown = !RomsComponent.getPaginationState()[2];
      this.romsData = [];
      this.loading = true;
    }
    this.romsObs$ = this.romsService.getAllRoms({
      // limit: getFavorites === true ? null : this.limit,
      favorites: getFavorites
    });
    this.romsSub = this.romsObs$.subscribe(
      (roms: Rom[]): void => {
        this.isError = false;
        this.romsData = roms;
        this.loading = false;
        if (!this.loading && this.romsData.length < 1) {
          this.noRomsMsg = this.favoritesShown
            ? 'No Favorite ROMs Found'
            : 'No ROMs to Show';
        }
      },
      (err: JSONObject): void => {
        this.isError = true;
        this.loading = false;
        this.noRomsMsg = '';
        logger.error(err);
      },
      () => {
        this.pageSize = RomsComponent.getPaginationState()[0];
        this.currentPage = RomsComponent.getPaginationState()[1];
      }
    );
  }

  public onPageChange(paginateNums: [number, number]): void {
    this.pageSize = paginateNums[0];
    this.currentPage = paginateNums[1];
    RomsComponent.setPaginationState([
      this.pageSize,
      this.currentPage,
      this.favoritesShown
    ]);
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
