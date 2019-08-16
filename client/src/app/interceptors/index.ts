import { InjectionToken } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { HttpsInterceptor } from './https.interceptor';
import { TokenInterceptor } from './token.interceptor';
import { JwtInterceptor } from './jwt.interceptor';
import { BleachInterceptor } from './bleach.interceptor';

export const httpInterceptorProviders: {
  provide: InjectionToken<HttpInterceptor[]>;
  useClass:
    | typeof HttpsInterceptor
    | typeof TokenInterceptor
    | typeof JwtInterceptor
    | typeof BleachInterceptor;
  multi: boolean;
}[] = [
  // { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BleachInterceptor,
    multi: true
  }
];
