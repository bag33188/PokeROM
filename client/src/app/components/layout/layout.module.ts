import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BetaVersionAlertComponent } from './beta-version-alert/beta-version-alert.component';
import { CookiesAlertComponent } from './cookies-alert/cookies-alert.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    BetaVersionAlertComponent,
    CookiesAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    NgbModule,
    BrowserAnimationsModule
  ],
  exports: [
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
