import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../../services/rating.service';
import { Rating } from '../../../models/Rating';
import sanitizeXSS from '../../../helpers/sanitize-xss';
import removeStrings from '../../../helpers/remove-strings';
import { LoggerService as logger } from '../../../services/logger.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  public currentRate: number = 0;
  private rating: Rating;
  public message: string;
  public formValid: boolean;
  public formSubmitted: boolean;
  public rateHasChanged: boolean;
  public currentRateHover: number;
  public rate: number;
  public isError: boolean;
  public loading: boolean;

  constructor(private ratingService: RatingService) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStrings = removeStrings;
  }

  ngOnInit(): void {
    this.message = '';
    this.formValid = true;
    this.formSubmitted = false;
    this.rateHasChanged = false;
    this.currentRateHover = 0;
    this.rate = 0;
    this.isError = false;
    this.loading = false;
  }

  public setRating(rate: number): void {
    this.currentRate = rate;
    this.rate = rate;
  }

  public setRatingHover(rate: number) {
    this.currentRateHover = rate;
  }
  public resetRating(): void {
    if (!this.rateHasChanged) {
      this.currentRateHover = 0;
    } else {
      this.currentRate = this.rate;
    }
  }

  public submitRating(): void {
    this.loading = true;
    this.rating = {
      rating: this.currentRate,
      message: this.message.sanitizeXSS(false, false).removeStrings(false),
      date_time: new Date()
    };
    if (this.currentRate === 0) {
      this.formValid = false;
    } else {
      this.ratingService.addRating(this.rating).subscribe(
        (): void => {
          this.formValid = true;
          this.loading = false;
          this.formSubmitted = true;
          this.isError = false;
        },
        (err: any): void => {
          this.loading = false;
          this.isError = true;
          logger.error(err);
        }
      );
    }
  }
}
