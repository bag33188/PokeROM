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
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgBootstrapModule } from '../ng-bootstrap/ng-bootstrap.module';
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
import { RomsModule } from '../roms/roms.module';
import { RatingsComponent } from './ratings/ratings.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from '../../services/user.service';
import { NaturesService } from '../../services/natures.service';
import { LoggerService } from '../../services/logger.service';
import { RatingService } from '../../services/rating.service';
import { AccountComponent } from './account/account.component';
import { SpinnerModule } from '../spinners/spinner.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    RomsComponent,
    RomInfoComponent,
    NotFoundComponent,
    LoginComponent,
    FaqComponent,
    NaturesComponent,
    RatingsComponent,
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RomsModule,
    NgBootstrapModule,
    FontAwesomeModule,
    SpinnerModule,
    DirectivesModule,
    PipesModule
  ],
  exports: [],
  providers: [
    AuthService,
    AuthGuard,
    RomsService,
    UserService,
    NaturesService,
    LoggerService,
    RatingService
  ]
})
export class PagesModule {}
