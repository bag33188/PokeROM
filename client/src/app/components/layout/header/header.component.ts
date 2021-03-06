import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HtmlRoute } from '../../../interfaces/HtmlRoute';
import { Route } from '../../../interfaces/Route';
import { ImagesEnum } from '../../../enums/images.enum';
import { ImageUrlsEnum } from '../../../enums/image-urls.enum';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private routeKey: string;
  public loggedOutRoutes: Route[];
  private loggedInRoutes: Route[];
  public routes: HtmlRoute[];
  public images: typeof ImagesEnum;
  public logoFallbackUrl: string;
  @ViewChild('logo') public logoElement: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.images = ImagesEnum;
    this.routes = [
      {
        routerLink: ['/', 'home'],
        routerLinkActive: ['lightgreen'],
        routerLinkActiveOptions: { exact: true },
        navLinkText: 'Home',
        accessKey: 'h'
      },
      {
        routerLink: ['/', 'roms'],
        routerLinkActive: ['lightgreen'],
        routerLinkActiveOptions: { exact: false },
        navLinkText: 'ROMs',
        accessKey: 'r'
      },
      {
        routerLink: ['/', 'natures'],
        routerLinkActive: ['lightgreen'],
        routerLinkActiveOptions: { exact: true },
        navLinkText: 'Natures',
        accessKey: 'n'
      },
      {
        routerLink: ['/', 'faq'],
        routerLinkActive: ['lightgreen'],
        routerLinkActiveOptions: { exact: true },
        navLinkText: 'FAQ',
        accessKey: 'q'
      },
      {
        routerLink: ['/', 'rate'],
        routerLinkActive: ['lightgreen'],
        routerLinkActiveOptions: { exact: true },
        navLinkText: 'Rate',
        accessKey: 't'
      }
    ];
    this.routeKey = '_routerState';
    this.loggedOutRoutes = [
      {
        url: '/faq',
        pathMatch: 'prefix'
      },
      {
        url: '/home',
        pathMatch: 'full'
      },
      {
        url: '/natures',
        pathMatch: 'full'
      },
      {
        url: '/rate',
        pathMatch: 'full'
      },
      {
        url: '/docs',
        pathMatch: 'full'
      },
      {
        url: '/not_found',
        pathMatch: 'prefix'
      }
    ];
    this.loggedInRoutes = [
      {
        url: '/roms',
        pathMatch: 'full'
      },
      {
        url: '/roms',
        pathMatch: 'prefix'
      },
      {
        url: '/account',
        pathMatch: 'full'
      },
      {
        url: '/not_found',
        pathMatch: 'prefix'
      }
    ];
    this.logoFallbackUrl = ImageUrlsEnum.LOGO;
  }

  public isUrl(url: string, pathMatch: string): boolean {
    switch (pathMatch) {
      case 'full':
        return this.route[this.routeKey].snapshot.url === url;
      case 'prefix':
        return new RegExp(url.replace('/', '\\/'), 'i').test(
          this.route[this.routeKey].snapshot.url
        );
      default:
        return location.pathname === url;
    }
  }

  public isLoggedOut(): boolean {
    return this.authService.loggedOut();
  }

  public logout(): void {
    AuthService.logout();
    if (this.isRoutes(this.loggedInRoutes, true)) {
      this.router.navigate(['/', 'home']);
    }
  }

  public isRoutes(routes: Route[], loggedIn: boolean): boolean {
    let isOneOfRoutes: boolean = false;
    routes.forEach((route: Route): void => {
      if (this.isUrl(route.url, route.pathMatch)) {
        isOneOfRoutes = true;
      }
    });
    return loggedIn ? isOneOfRoutes : isOneOfRoutes && this.isLoggedOut();
  }
}
