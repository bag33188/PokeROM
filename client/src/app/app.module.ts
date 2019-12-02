import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './components/layout/layout.module';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './interceptors';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DirectivesModule } from './directives/directives.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { jwtProvider } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    CommonModule,
    DirectivesModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    ApiService,
    JwtHelperService,
    jwtProvider,
    httpInterceptorProviders
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
