import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../services/rating.service';
import { Rating } from '../../models/Rating';
import sanitizeXSS from '../../helpers/sanitize-xss';
import removeStringChars from '../../helpers/remove-string-chars';
import { LoggerService as logger } from '../../services/logger.service';
import { JSONObject } from '../../models/JSONObject';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  public currentRate: number = 0;
  public message: string;
  public formValid: boolean;
  public formSubmitted: boolean;
  public rateHasChanged: boolean;
  public currentRateHover: number;
  public rate: number;
  public isError: boolean;
  public loading: boolean;
  public firedOff: boolean;

  constructor(private ratingService: RatingService) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStringChars = removeStringChars;
  }

  public ngOnInit(): void {
    this.message = '';
    this.formValid = true;
    this.formSubmitted = false;
    this.rateHasChanged = false;
    this.currentRateHover = 0;
    this.rate = 0;
    this.isError = false;
    this.loading = false;
    this.firedOff = false;
  }

  public setRating(rate: number): void {
    this.currentRate = rate;
    this.rate = rate;
  }

  public setRatingHover(rate: number): void {
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
    this.firedOff = true;
    if (this.currentRate === 0) {
      this.formValid = false;
    } else {
      const rating: Rating = {
        rating: this.currentRate,
        message: this.message
          .sanitizeXSS({ replaceSpecialChars: false, encode: false })
          .removeStringChars(),
        date_time: new Date()
      };
      this.ratingService.addRating(rating).subscribe(
        (): void => {
          this.formValid = true;
          this.loading = false;
          this.formSubmitted = true;
          this.isError = false;
        },
        (err: JSONObject): void => {
          this.loading = false;
          this.isError = true;
          this.firedOff = false;
          logger.error(err);
        }
      );
    }
  }
}
