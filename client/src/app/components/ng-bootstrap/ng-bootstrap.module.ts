import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AccordionComponent } from './home/accordion/accordion.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { PaginationComponent } from './roms/pagination/pagination.component';
import { TabsetComponent } from './faq/tabset/tabset.component';
import { PopupComponent } from './rom-info/popup/popup.component';
import { ToastComponent } from './faq/toast/toast.component';
import { SvgComponent } from './faq/toast/svg/svg.component';
import { ModalContentComponent } from './faq/modal/modal-content.component';

@NgModule({
  declarations: [
    AccordionComponent,
    CarouselComponent,
    PaginationComponent,
    TabsetComponent,
    ModalContentComponent,
    PopupComponent,
    ToastComponent,
    SvgComponent
  ],
  entryComponents: [ModalContentComponent],
  imports: [CommonModule, NgbModule, BrowserModule, RouterModule],
  exports: [
    AccordionComponent,
    CarouselComponent,
    PaginationComponent,
    TabsetComponent,
    PopupComponent,
    ToastComponent
  ]
})
export class NgBootstrapModule {}
