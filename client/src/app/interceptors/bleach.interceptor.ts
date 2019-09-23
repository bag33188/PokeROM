import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import he from 'he';
import sanitizeXSS from '../helpers/sanitize-xss';
import removeStringChars from '../helpers/remove-string-chars';

@Injectable()
export class BleachInterceptor implements HttpInterceptor {
  constructor() {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStringChars = removeStringChars;
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(
        (event: HttpEvent<any>): HttpEvent<any> => {
          if (event instanceof HttpResponse) {
            const sanitizeBody: () => void = (): void => {
              const body: any = event.body;
              if (Array.isArray(body)) {
                return body.forEach((obj: any): void => {
                  obj = Object.keys(obj).forEach((key: string): void => {
                    if (typeof obj[key] === 'string') {
                      obj[key] = he
                        .decode(obj[key])
                        .sanitizeXSS()
                        .removeStringChars();
                    }
                  });
                });
              } else {
                return Object.keys(body).forEach((key: string): void => {
                  if (typeof body[key] === 'string') {
                    body[key] = he
                      .decode(body[key])
                      .sanitizeXSS()
                      .removeStringChars();
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
