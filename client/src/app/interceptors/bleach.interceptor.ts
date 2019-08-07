import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import '../sanitation/sanitizeXSS';
import { map } from 'rxjs/operators';
import he from 'he';

@Injectable()
export class BleachInterceptor implements HttpInterceptor {
  constructor() {}
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
                      obj[key] = he.decode(obj[key]).sanitizeXSS();
                    }
                  });
                });
              } else {
                return Object.keys(body).forEach((key: string): void => {
                  if (typeof body[key] === 'string') {
                    he.decode(body[key]).sanitizeXSS();
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
