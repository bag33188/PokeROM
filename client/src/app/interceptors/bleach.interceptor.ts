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
import { LoggerService as logger } from '../services/logger.service';

@Injectable()
export class BleachInterceptor implements HttpInterceptor {
  constructor() {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStringChars = removeStringChars;
  }
  public intercept(
    req: HttpRequest<JSONObject>,
    next: HttpHandler
  ): Observable<HttpEvent<JSONObject | JSONArray>> {
    return next.handle(req).pipe(
      map(
        (
          event: HttpEvent<JSONObject | JSONArray>
        ): HttpEvent<JSONObject | JSONArray> => {
          if (event instanceof HttpResponse) {
            const sanitizeBody: () => JSONObject | JSONArray = ():
              | JSONObject
              | JSONArray => {
              let body: JSONObject | JSONArray = event.body;
              if (Array.isArray(body)) {
                body = body.map(
                  (obj: JSONObject): JSONObject => {
                    Object.keys(obj).forEach((key: string): void => {
                      if (typeof obj[key] === 'string') {
                        obj[key] = he
                          .decode(obj[key])
                          .sanitizeXSS()
                          .removeStringChars();
                      }
                    });
                    return obj;
                  }
                );
              } else {
                Object.keys(body).forEach((key: string): void => {
                  if (typeof body[key] === 'string') {
                    body[key] = he
                      .decode(body[key])
                      .sanitizeXSS()
                      .removeStringChars();
                  }
                });
              }
              return body;
            };
            return event.clone({
              body: sanitizeBody()
            });
          } else {
            return event;
          }
        },
        (err: object): void => {
          logger.error(err);
        }
      )
    );
  }
}
