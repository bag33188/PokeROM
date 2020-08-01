import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import sanitizeXSS from '../helpers/sanitize-xss';
import removeStringChars from '../helpers/remove-string-chars';
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../models/JSONArray';
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
          if (
            event instanceof HttpResponse &&
            event.type === HttpEventType.Response
          ) {
            const sanitizeBody: () => JSONObject | JSONArray = ():
              | JSONObject
              | JSONArray => {
              let body: JSONObject | JSONArray = event.body;
              if (Array.isArray(body)) {
                body = body.map(
                  (obj: JSONObject): JSONObject => {
                    Object.keys(obj).forEach((key: string): void => {
                      if (typeof obj[key] === 'string') {
                        obj[key] = obj[key]
                          .toString()
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
                    body[key] = body[key]
                      .toString()
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
