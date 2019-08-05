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
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private route: ActivatedRoute) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const routeKey: string = '_routerState';
    const authUrls: string[] = [
      `${environment.apiUrl}/roms`,
      `${environment.apiUrl}/roms/${
        this.route.snapshot[routeKey].url.split('/')[3]
          ? this.route.snapshot[routeKey].url.split('/')[3]
          : ''
      }`
    ];
    if (authUrls.includes(req.url)) {
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.loadToken()
        }
      });
    }
    return next.handle(req);
  }
}
