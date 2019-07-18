import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Route from '../../../interfaces/Route';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeKey: string;
  loggedOutRoutes: Route[];
  loggedInRoutes: Route[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookiesService
  ) {}

  ngOnInit() {
    this.routeKey = '_routerState';
    this.loggedOutRoutes = [
      {
        url: '/faq',
        pathMatch: 'full'
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
        url: '/docs',
        pathMatch: 'full'
      },
      {
        url: '/404',
        pathMatch: 'prefix'
      }
    ];
  }

  isUrl(url: string, pathMatch: string): boolean {
    switch (pathMatch) {
      case 'full':
        return this.activatedRoute[this.routeKey].snapshot.url === url;
      case 'prefix':
        return new RegExp(url.replace('/', '\\/'), 'i').test(
          this.activatedRoute[this.routeKey].snapshot.url
        );
      default:
        return location.pathname === url;
    }
  }

  isLoggedOut(): boolean {
    return this.authService.loggedOut();
  }

  logout(): void {
    this.authService.logout();
    if (this.isRoutes(this.loggedInRoutes, true)) {
      this.router.navigate(['home']);
    }
  }

  isRoutes(routes: Route[], loggedIn: boolean): boolean {
    let isOneOfRoutes: boolean = false;
    routes.forEach(
      (route: Route): void => {
        if (this.isUrl(route.url, route.pathMatch)) {
          isOneOfRoutes = true;
        }
      }
    );
    if (loggedIn) {
      return isOneOfRoutes;
    } else {
      return isOneOfRoutes && this.isLoggedOut();
    }
  }
}
