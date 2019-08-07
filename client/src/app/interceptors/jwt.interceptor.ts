import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookiesService } from '../services/cookies.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
    private cookieService: CookiesService,
    private authService: AuthService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>): void => {
          if (event instanceof HttpResponse) {
            const romsApiRouteRegex: RegExp = /(?:(\/api\/roms(\/)?)((?:#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})){4})?)/;
            if (romsApiRouteRegex.test(event.url)) {
              if (this.authService.loggedOut()) {
                this.authService.logout();
                this.router.navigate(['/', 'login']);
              }
            }
          }
        },
        (err: any): void => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/', 'login']);
            }
          }
        }
      )
    );
  }
}
