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
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../interfaces/JSONArray';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<JSONObject>,
    next: HttpHandler
  ): Observable<HttpEvent<JSONObject | JSONArray | void>> {
    const routeParams: string[] = req.urlWithParams
      .replace(environment.apiUrl.replace('/api', '/'), '')
      .split('/');
    const authUrls: string[] = [
      `${environment.apiUrl}/roms`,
      `${environment.apiUrl}/roms/${
        routeParams[1] === 'roms' && routeParams[2] !== undefined
          ? routeParams[2]
          : ''
      }`,
      `${environment.apiUrl}/users/${
        routeParams[1] === 'users' && routeParams[2] !== undefined
          ? routeParams[2]
          : ''
      }`
    ];
    if (authUrls.includes(req.url)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${AuthService.loadToken()}`
        }
      });
    }
    return next.handle(req);
  }
}
