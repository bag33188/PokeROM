import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../../services/rating.service';
import { Rating } from '../../../models/Rating';
import sanitizeXSS from '../../../sanitation/sanitizeXSS';
import { LoggerService as logger } from '../../../services/logger.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  currentRate: number = 0;
  rating: Rating;
  message: string;
  formValid: boolean;
  formSubmitted: boolean;
  rateHasChanged: boolean;
  currentRateHover: number;
  rate: number;
  isError: boolean;

  constructor(private ratingService: RatingService) {
    String.prototype.sanitizeXSS = sanitizeXSS;
  }

  ngOnInit(): void {
    this.message = '';
    this.formValid = true;
    this.formSubmitted = false;
    this.rateHasChanged = false;
    this.currentRateHover = 0;
    this.rate = 0;
    this.isError = false;
  }

  setRating(rate: number): void {
    this.currentRate = rate;
    this.rate = rate;
  }

  setRatingHover(rate: number) {
    this.currentRateHover = rate;
  }
  resetRating(): void {
    if (!this.rateHasChanged) {
      this.currentRateHover = 0;
    } else {
      this.currentRate = this.rate;
    }
  }

  submitRating(): void {
    this.rating = {
      rating: this.currentRate,
      message: this.message.sanitizeXSS(false, false),
      date_time: new Date()
    };
    if (this.currentRate === 0) {
      this.formValid = false;
    } else {
      this.ratingService.addRating(this.rating).subscribe(
        (): void => {
          this.formValid = true;
          this.formSubmitted = true;
          this.isError = false;
        },
        (err: any): void => {
          this.isError = true;
          logger.error(err);
        }
      );
    }
  }
}
