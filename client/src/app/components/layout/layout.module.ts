import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CookiesAlertComponent } from './cookies-alert/cookies-alert.component';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { LoggerService } from '../../services/logger.service';
import { UnitConversionService } from '../../services/unit-conversion.service';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    CookiesAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    DirectivesModule,
    PipesModule
  ],
  providers: [AuthService, UserService, LoggerService, UnitConversionService],
  exports: [BodyComponent, FooterComponent, HeaderComponent]
})
export class LayoutModule {}
