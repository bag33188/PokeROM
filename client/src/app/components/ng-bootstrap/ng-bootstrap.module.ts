import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoAccordionComponent } from './home/info-accordion/info-accordion.component';
import { SplashCarouselComponent } from './home/splash-carousel/splash-carousel.component';
import { RomsPaginationComponent } from './roms/roms-pagination/roms-pagination.component';
import { BrowserTabsetComponent } from './faq/browser-tabset/browser-tabset.component';
import { ShowcaseJumbotronComponent } from './home/showcase-jumbotron/showcase-jumbotron.component';
import { RomHackPopupComponent } from './rom-info/rom-hack-popup/rom-hack-popup.component';
import { DisclaimerToastComponent } from './faq/disclaimer-toast/disclaimer-toast.component';
import { MsgIconSvgComponent } from './faq/disclaimer-toast/msg-icon-svg/msg-icon-svg.component';
import { StarRatingComponent } from './ratings/star-rating/star-rating.component';
import { IeModalContentComponent } from './faq/ie-modal-content/ie-modal-content.component';
import { PrivacyAlertComponent } from './ratings/privacy-alert/privacy-alert.component';
import { DeleteUserBtnComponent } from './account/delete-user-btn/delete-user-btn.component';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { LoggerService } from '../../services/logger.service';
import { UnitConversionService } from '../../services/unit-conversion.service';
import { DeleteUserModalComponent } from './account/delete-user-modal/delete-user-modal.component';
import { SpinnerModule } from '../spinners/spinner.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    InfoAccordionComponent,
    SplashCarouselComponent,
    RomsPaginationComponent,
    BrowserTabsetComponent,
    IeModalContentComponent,
    RomHackPopupComponent,
    DisclaimerToastComponent,
    MsgIconSvgComponent,
    ShowcaseJumbotronComponent,
    StarRatingComponent,
    PrivacyAlertComponent,
    DeleteUserBtnComponent,
    DeleteUserModalComponent
  ],
  entryComponents: [IeModalContentComponent],
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
    InfoAccordionComponent,
    SplashCarouselComponent,
    RomsPaginationComponent,
    BrowserTabsetComponent,
    RomHackPopupComponent,
    DisclaimerToastComponent,
    ShowcaseJumbotronComponent,
    StarRatingComponent,
    PrivacyAlertComponent,
    DeleteUserBtnComponent,
    DeleteUserModalComponent
  ],
  providers: [AuthService, UserService, LoggerService, UnitConversionService]
})
export class NgBootstrapModule {}
