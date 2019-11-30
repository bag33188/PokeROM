import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit
} from '@angular/core';
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
  @ViewChild('cookies', { static: true }) private cookiesElement: ElementRef;
  @ViewChild('browserCompatibility', { static: true })
  private browserCompatibilityElement: ElementRef;
  public environment: Environment = environment;
  public favorites: typeof Favorites;
  public isCollapsed: boolean;
  public showDummy: boolean;
  @HostListener('window:hashchange')
  private onHashChange(): void {
    switch (this.route.snapshot.fragment) {
      case 'browser-compatibility':
        this.browserCompatibilityElement.nativeElement.scrollIntoView();
        break;
      case 'cookies':
        this.cookiesElement.nativeElement.scrollIntoView();
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  }

  constructor(private route: ActivatedRoute) {}

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
