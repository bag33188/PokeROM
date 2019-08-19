import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let httpsReq: HttpRequest<any>;
    if (environment.production) {
      // clone request and replace 'http://' with 'https://' at the same time
      httpsReq = req.clone({
        url: req.url.replace('http://', 'https://').replace('www.', '')
      });
    } else {
      httpsReq = req.clone({
        url: req.url
      });
    }
    return next.handle(httpsReq);
  }
}
