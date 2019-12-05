import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RomsService } from '../../services/roms.service';
import { Rom } from '../../models/Rom';
import { JSONObject } from '../../models/JSONObject';
import { Observable, Subscription } from 'rxjs';
import { LoggerService as logger } from '../../services/logger.service';
import he from 'he';
import {
  NavigationEnd,
  Router,
  RouterEvent,
  RoutesRecognized
} from '@angular/router';
import { filter, take } from 'rxjs/operators';

type paginationState = [number, number, boolean];

@Component({
  selector: 'roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.scss']
})
export class RomsComponent implements OnInit, OnDestroy {
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
  public favoritesShown: boolean;
  private static setPaginationState(state?: paginationState): void {
    if (!localStorage.getItem('paginationState') && !state) {
      localStorage.setItem('paginationState', JSON.stringify([0, 1, false]));
    }
    if (state !== null && state !== undefined) {
      localStorage.setItem('paginationState', JSON.stringify(state));
    }
  }
  private static getPaginationState(): paginationState {
    return JSON.parse(localStorage.getItem('paginationState'));
  }
  constructor(
    private router: Router,
    private romsService: RomsService,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof RoutesRecognized || event instanceof NavigationEnd) {
        if (event.url === '/roms') {
          this.onPageChange([0, 1]);
          RomsComponent.setPaginationState([0, 1, false]);
        }
      }
    });
  }

  public ngOnInit(): void {
    RomsComponent.setPaginationState();
    if (document.readyState !== 'complete') {
      this.onPageChange([0, 1]);
      RomsComponent.setPaginationState([0, 1, false]);
    }
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
      limit: getFavorites === true ? null : this.limit,
      favorites: getFavorites
    });
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
