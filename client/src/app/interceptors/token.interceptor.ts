import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const routeParams: string[] = req.urlWithParams
      .replace(
        /http(s?):\/\/(localhost:5000|pokerom-broccolini\.herokuapp\.com)\//,
        ''
      )
      .split('/');
    const authUrls: string[] = [
      `${environment.apiUrl}/roms`,
      `${environment.apiUrl}/roms/${
        routeParams[1] === 'roms' && routeParams[2] ? routeParams[2] : ''
      }`,
      `${environment.apiUrl}/users/${
        routeParams[1] === 'users' && routeParams[2] ? routeParams[2] : ''
      }`
    ];
    if (authUrls.includes(req.url)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.loadToken()}`
        }
      });
    }
    return next.handle(req);
  }
}
