import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserTabsetComponent } from './browser-tabset/browser-tabset.component';
import { DisclaimerToastComponent } from './disclaimer-toast/disclaimer-toast.component';
import { IeModalContentComponent } from './ie-modal-content/ie-modal-content.component';
import { FaqComponent } from './faq.component';
import { ApiService } from '../../services/api.service';
import { FaqRoutingModule } from './faq-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';
import { MsgIconSvgComponent } from './msg-icon-svg/msg-icon-svg.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FaqRoutingModule,
    FontAwesomeModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [
    BrowserTabsetComponent,
    DisclaimerToastComponent,
    IeModalContentComponent,
    MsgIconSvgComponent,
    FaqComponent
  ],
  providers: [ApiService]
})
export class FaqModule {}
