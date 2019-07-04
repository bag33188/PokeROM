import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './home/accordion/accordion.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { PaginationComponent } from './roms/pagination/pagination.component';
import { TabsetComponent } from './faq/tabset/tabset.component';

@NgModule({
  declarations: [
    AccordionComponent,
    CarouselComponent,
    PaginationComponent,
    TabsetComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    AccordionComponent,
    CarouselComponent,
    PaginationComponent,
    TabsetComponent
  ]
})
export class NgBootstrapModule { }
