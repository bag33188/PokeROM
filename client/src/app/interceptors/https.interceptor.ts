import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../models/JSONArray';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  constructor() {}
  public intercept(
    req: HttpRequest<JSONObject>,
    next: HttpHandler
  ): Observable<HttpEvent<JSONObject | JSONArray>> {
    let httpsReq: HttpRequest<JSONObject>;
    if (environment.production) {
      // clone request and replace 'http://' with 'https://' at the same time
      httpsReq = req.clone({
        url: req.url.replace('http://', 'https://')
      });
    } else {
      httpsReq = req;
    }
    return next.handle(httpsReq);
  }
}
