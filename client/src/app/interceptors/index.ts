import { InjectionToken } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { HttpsInterceptor } from './https.interceptor';
import { TokenInterceptor } from './token.interceptor';

export const interceptorProviders: {
  provide: InjectionToken<HttpInterceptor[]>;
  useClass: any;
  multi: boolean;
}[] = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
];
