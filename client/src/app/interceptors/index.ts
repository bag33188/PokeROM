import { InjectionToken } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { HttpsInterceptor } from './https.interceptor';

export const httpInterceptorProviders: {
  provide: InjectionToken<HttpInterceptor[]>;
  useClass: typeof HttpsInterceptor;
  multi: boolean;
}[] = [{ provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true }];
