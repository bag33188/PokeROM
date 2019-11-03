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
    if (environment.production) {
      // clone request and replace 'http://' with 'https://' at the same time
      const httpsReq: HttpRequest<any> = req.clone({
        url: req.url.replace('http://', 'https://')
      });
      return next.handle(httpsReq);
    } else {
      return next.handle(req);
    }
  }
}
