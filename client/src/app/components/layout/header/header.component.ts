import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Route from '../../../interfaces/Route';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeKey: string;
  routes: Route[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeKey = '_routerState';
    this.routes = [
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
        url: /\/404/,
        pathMatch: 'prefix'
      }
    ];
  }

  isUrl(url: string | RegExp, pathMatch: string): boolean {
    switch (pathMatch) {
      case 'full':
        return (
          this.activatedRoute[this.routeKey].snapshot.url === (url as string)
        );
      case 'prefix':
        return new RegExp(url as RegExp).test(
          this.activatedRoute[this.routeKey].snapshot.url
        );
      default:
        return location.pathname === (url as string);
    }
  }

  isLoggedOut(): boolean {
    return this.authService.loggedOut();
  }

  logout(): void {
    this.authService.logout();
    if (
      this.isUrl('/roms', 'full') ||
      this.isUrl('roms', 'prefix') ||
      this.isUrl(/\/404/, 'prefix')
    ) {
      this.router.navigate(['home']);
    }
  }

  isRoutes(routes: Route[]): boolean {
    let isOneOfRoutes: boolean = false;
    routes.forEach(
      (route: Route): void => {
        if (this.isUrl(route.url, route.pathMatch)) {
          isOneOfRoutes = true;
        }
      }
    );
    return isOneOfRoutes && this.isLoggedOut();
  }
}
