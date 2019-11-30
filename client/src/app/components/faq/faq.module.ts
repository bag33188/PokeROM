import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserTabsetComponent } from './browser-tabset/browser-tabset.component';
import { DisclaimerToastComponent } from './disclaimer-toast/disclaimer-toast.component';
import { IeModalContentComponent } from './ie-modal-content/ie-modal-content.component';
import { FaqComponent } from './faq.component';
import { ApiService } from '../../services/api.service';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [
    BrowserTabsetComponent,
    DisclaimerToastComponent,
    IeModalContentComponent,
    FaqComponent
  ],
  providers: [ApiService]
})
export class FaqModule {}
