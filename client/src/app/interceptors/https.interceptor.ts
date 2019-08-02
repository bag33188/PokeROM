import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let httpsReq: HttpRequest<any>;
    if (environment.production) {
      console.warn('HttpsInterceptor');
      // clone request and replace 'http://' with 'https://' at the same time
      httpsReq = req.clone({
        url: req.url.replace('http://', 'https://')
      });
    } else {
      httpsReq = req.clone({
        url: req.url
      });
    }
    return next.handle(httpsReq);
  }
}
