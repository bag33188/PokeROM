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
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../interfaces/JSONArray';

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
              const body: JSONArray | JSONObject = event.body;
              if (Array.isArray(body)) {
                return body.forEach((obj: JSONObject): void => {
                  Object.keys(obj).forEach((key: string): void => {
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
        (err: object): never => {
          throw err;
        }
      )
    );
  }
}
