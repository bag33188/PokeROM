import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from './home/accordion/accordion.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { PaginationComponent } from './roms/pagination/pagination.component';
import { TabsetComponent } from './faq/tabset/tabset.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import { PopupComponent } from './rom-info/popup/popup.component';
import { ToastComponent } from './faq/toast/toast.component';
import { SvgComponent } from './faq/toast/svg/svg.component';
import { RatingComponent } from './ratings/rating/rating.component';
import { ModalContentComponent } from './faq/modal-content/modal-content.component';
import { AlertComponent } from './ratings/alert/alert.component';
import { DeleteUserBtnComponent } from './account/delete-user-btn/delete-user-btn.component';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { LoggerService } from '../../services/logger.service';
import { UnitConversionService } from '../../services/unit-conversion.service';
import { ModalComponent } from './account/modal/modal.component';
import { SpinnerModule } from '../spinner/spinner.module';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [
    AccordionComponent,
    CarouselComponent,
    PaginationComponent,
    TabsetComponent,
    ModalContentComponent,
    PopupComponent,
    ToastComponent,
    SvgComponent,
    JumbotronComponent,
    RatingComponent,
    AlertComponent,
    DeleteUserBtnComponent,
    ModalComponent
  ],
  entryComponents: [ModalContentComponent],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    RouterModule,
    FontAwesomeModule,
    SpinnerModule,
    DirectivesModule
  ],
  exports: [
    AccordionComponent,
    CarouselComponent,
    PaginationComponent,
    TabsetComponent,
    PopupComponent,
    ToastComponent,
    JumbotronComponent,
    RatingComponent,
    AlertComponent,
    DeleteUserBtnComponent,
    ModalComponent
  ],
  providers: [AuthService, UserService, LoggerService, UnitConversionService]
})
export class NgBootstrapModule {}
