import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Environment } from '../../interfaces/Environment';
import { Favorites } from '../../enums/favorites.enum';

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
  @HostListener('window:hashchange')
  private onHashChange(): void {
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
    private viewportScroller: ViewportScroller
  ) {}

  public ngOnInit(): void {
    this.showDummy = !!location.hash;
    this.isCollapsed = true;
    this.emulatorUrl = 'https://www.retroarch.com';
    this.favorites = Favorites;
  }

  public ngAfterViewInit(): void {
    this.onHashChange();
  }

  public parseFavorites(): { [index: string]: string[] } {
    return {
      pokemon: Favorites.POKEMON.split('\u002C\u0020'),
      games: Favorites.GAMES.split('\u002C\u0020'),
      regions: Favorites.REGIONS.split('\u002C\u0020'),
      characters: Favorites.CHARACTERS.split('\u002C\u0020')
    };
  }
}
