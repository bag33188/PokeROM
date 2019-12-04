/* tslint:disable:no-eval */
import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Environment } from '../../interfaces/Environment';
import { Favorites } from '../../enums/favorites.enum';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { ApiVersion } from '../../models/ApiVersion';

interface PkmnFavorites {
  pokemon: string[];
  games: string[];
  regions: string[];
  characters: string[];
}

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterViewInit {
  public emulatorUrl: string;
  public environment: Environment = environment;
  public favorites: typeof Favorites;
  public isCollapsed: boolean;
  public showDummy: boolean;
  public apiVersion$: Observable<ApiVersion>;
  @HostListener('window:hashchange')
  private onHashChange(): void {
    this.showDummy = !!location.hash;
    switch (this.route.snapshot.fragment) {
      case 'browser-compatibility':
        this.viewportScroller.scrollToAnchor('browser-compatibility');
        break;
      case 'cookies':
        this.viewportScroller.scrollToAnchor('cookies');
        break;
      default:
        this.viewportScroller.scrollToPosition([0, 0]);
        break;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.showDummy = !!location.hash;
    this.isCollapsed = true;
    this.emulatorUrl = 'https://www.retroarch.com';
    this.favorites = Favorites;
    this.apiVersion$ = this.apiService.getApiVersion();
  }

  public ngAfterViewInit(): void {
    this.onHashChange();
  }

  public parseFavorites(): PkmnFavorites {
    return {
      pokemon: eval(Favorites.POKEMON),
      games: eval(Favorites.GAMES),
      regions: eval(Favorites.REGIONS),
      characters: eval(Favorites.CHARACTERS)
    };
  }
}
