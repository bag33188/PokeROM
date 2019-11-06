import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app-routing.module';
import { PagesModule } from './components/pages/pages.module';
import { LayoutModule } from './components/layout/layout.module';
import { RomsModule } from './components/roms/roms.module';
import { NgBootstrapModule } from './components/ng-bootstrap/ng-bootstrap.module';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './interceptors';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LayoutModule,
    RomsModule,
    NgBootstrapModule,
    DirectivesModule,
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
