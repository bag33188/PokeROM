import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app-routing.module';
import { PagesModule } from './components/pages/pages.module';
import { LayoutModule } from './components/layout/layout.module';
import { RomsModule } from './components/roms/roms.module';
import { NgBootstrapModule } from './components/ng-bootstrap/ng-bootstrap.module';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import interceptorProviders from './interceptors';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LayoutModule,
    RomsModule,
    NgBootstrapModule
  ],
  providers: [
    ApiService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    interceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
