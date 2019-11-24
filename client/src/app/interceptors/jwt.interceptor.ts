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
import { AuthService } from '../services/auth.service';
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../interfaces/JSONArray';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
    private authService: AuthService
  ) {}
  intercept(
    req: HttpRequest<JSONObject>,
    next: HttpHandler
  ): Observable<HttpEvent<JSONObject | JSONArray | void>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<JSONObject | JSONArray | void>): void => {
          if (event instanceof HttpResponse) {
            const romsApiRouteRegex: RegExp = /(?:(\/api\/roms(\/)?)([\da-fA-F]{24}?))$/;
            if (romsApiRouteRegex.test(event.url)) {
              if (this.authService.loggedOut()) {
                AuthService.logout();
                this.router.navigate(['/', 'login']);
              }
            }
          }
        },
        (err: object): void => {
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
