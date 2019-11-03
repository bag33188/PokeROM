import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Environment } from '../../../interfaces/Environment';
import { Favorites } from '../../../enums/favorites.enum';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterContentInit {
  public emulatorUrl: string;
  @ViewChild('cookies', { static: true }) private cookiesElement: ElementRef;
  @ViewChild('browserCompatibility', { static: true })
  private browserCompatibilityElement: ElementRef;
  public environment: Environment = environment;
  public favorites: typeof Favorites;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.emulatorUrl = 'https://www.retroarch.com';
    this.favorites = Favorites;
  }

  ngAfterContentInit(): void {
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

  public parseFavorites(): { [index: string]: string[] } {
    return {
      pokemon: Favorites.POKEMON.split('\u002C\u0020'),
      games: Favorites.GAMES.split('\u002C\u0020'),
      regions: Favorites.REGIONS.split('\u002C\u0020'),
      characters: Favorites.CHARACTERS.split('\u002C\u0020')
    };
  }
}
