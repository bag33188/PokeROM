import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbModule,
  NgbPaginationModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RomsComponent } from './roms/roms.component';
import { RomInfoComponent } from './rom-info/rom-info.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { NaturesComponent } from './natures/natures.component';
import { AuthService } from '../../services/auth.service';
import { RomsService } from '../../services/roms.service';
import { AuthGuard } from '../../guards/auth.guard';
import { RomsModule } from '../../components/roms/roms.module';
import { DocsComponent } from './docs/docs.component';
import { NgBootstrapModule } from '../../components/ng-bootstrap/ng-bootstrap.module';

@NgModule({
  declarations: [
    HomeComponent,
    RomsComponent,
    RomInfoComponent,
    NotFoundComponent,
    LoginComponent,
    FaqComponent,
    NaturesComponent,
    DocsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([], {
      anchorScrolling: 'enabled'
    }),
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RomsModule,
    NgBootstrapModule,
    FontAwesomeModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    RomsService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
  ]
})
export class PagesModule {}
