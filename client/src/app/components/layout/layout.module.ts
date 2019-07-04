import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BetaVersionAlertComponent } from './beta-version-alert/beta-version-alert.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    BetaVersionAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    NgbModule
  ],
  exports: [
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
