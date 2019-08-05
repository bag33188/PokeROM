import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import sanitizeXSS from '../sanitation/sanitizeXSS';
import { map } from 'rxjs/operators';
import he from 'he';

@Injectable()
export class BleachInterceptor implements HttpInterceptor {
  constructor() {
    String.prototype.sanitizeXSS = sanitizeXSS;
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const sanitizeBody = () => {
              const body = event.body;
              if (Array.isArray(body)) {
                return body.forEach(obj => {
                  obj = Object.keys(obj).forEach(key => {
                    if (typeof obj[key] === typeof 'string') {
                      obj[key] = he.decode(obj[key]).sanitizeXSS(false);
                    }
                  });
                });
              } else {
                return Object.keys(body).forEach(key => {
                  if (typeof key === typeof 'string') {
                    he.decode(key).sanitizeXSS(false);
                  }
                });
              }
            };
            return event.clone({
              body: sanitizeBody()
            });
          } else {
            return event;
          }
        },
        (err: any): never => {
          throw err;
        }
      )
    );
  }
}
