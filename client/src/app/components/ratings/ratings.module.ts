import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings.component';
import { PrivacyAlertComponent } from './privacy-alert/privacy-alert.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RatingsRoutingModule } from './ratings-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingService } from '../../services/rating.service';
import { SpinnerModule } from '../spinners/spinner.module';
import { DirectivesModule } from '../../directives/directives.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RatingsRoutingModule,
    NgbModule,
    SpinnerModule,
    DirectivesModule,
    FormsModule
  ],
  declarations: [RatingsComponent, PrivacyAlertComponent, StarRatingComponent],
  providers: [RatingService]
})
export class RatingsModule {}
