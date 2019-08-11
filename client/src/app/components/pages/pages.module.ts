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
import { SpinnerComponent } from '../spinner/spinner.component';

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
    SpinnerComponent
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
    FontAwesomeModule
  ],
  providers: [AuthService, AuthGuard, RomsService, UserService]
})
export class PagesModule {}
