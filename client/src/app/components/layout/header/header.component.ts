import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HtmlRoute } from '../../../interfaces/HtmlRoute';
import { Route } from '../../../interfaces/Route';
import { Images } from '../../../enums/images.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private routeKey: string;
  public loggedOutRoutes: Route[];
  private loggedInRoutes: Route[];
  public routes: HtmlRoute[];
  public images: typeof Images = Images;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes = [
      {
        routerLink: ['/', 'home'],
        routerLinkActive: ['yellow'],
        routerLinkActiveOptions: { exact: true },
        navLinkText: 'Home'
      },
      {
        routerLink: ['/', 'roms'],
        routerLinkActive: ['yellow'],
        routerLinkActiveOptions: { exact: false },
        navLinkText: 'ROMs'
      },
      {
        routerLink: ['/', 'natures'],
        routerLinkActive: ['yellow'],
        routerLinkActiveOptions: { exact: true },
        navLinkText: 'Natures'
      },
      {
        routerLink: ['/', 'faq'],
        routerLinkActive: ['yellow'],
        routerLinkActiveOptions: { exact: true },
        navLinkText: 'FAQ'
      },
      {
        routerLink: ['/', 'ratings'],
        routerLinkActive: ['yellow'],
        routerLinkActiveOptions: { exact: true },
        navLinkText: 'Rate'
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
        url: '/ratings',
        pathMatch: 'full'
      },
      {
        url: '/docs',
        pathMatch: 'full'
      },
      {
        url: '/404',
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
        url: '/404',
        pathMatch: 'prefix'
      }
    ];
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
