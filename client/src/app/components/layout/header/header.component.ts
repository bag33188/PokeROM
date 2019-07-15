import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeKey: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeKey = '_routerState';
  }

  isUrl(url: string): boolean {
    return this.activatedRoute[this.routeKey].snapshot.url === url;
  }

  isLoggedOut(): boolean {
    return this.authService.loggedOut();
  }

  logout(): void {
    this.authService.logout();
    if (
      this.isUrl('/roms') ||
      /roms/g.test(this.activatedRoute[this.routeKey].snapshot.url)
    ) {
      this.router.navigate(['home']);
    }
  }

  detectRoutes(routes: string[]): boolean {
    let isCommongRoute: boolean = false;
    routes.forEach((route: string) => {
      if (this.isUrl(route)) {
        isCommongRoute = true;
      }
    });
    return isCommongRoute && this.isLoggedOut();
  }
}
