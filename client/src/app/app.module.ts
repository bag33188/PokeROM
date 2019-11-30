import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout/layout.module';
import { RomsModule } from './components/roms/roms.module';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './interceptors';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DirectivesModule } from './directives/directives.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    DirectivesModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    ApiService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    httpInterceptorProviders
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
