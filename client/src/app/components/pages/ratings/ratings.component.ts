import {Component, OnInit} from '@angular/core';
import {RatingService} from '../../../services/rating.service';
import Rating from '../../../models/Rating';
import sanitizeXSS from '../../../sanitation/sanitizeXSS';


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

  constructor(private ratingService: RatingService) {
    String.prototype.sanitizeXSS = sanitizeXSS;
  }

  ngOnInit() {
    this.message = '';
    this.formValid = true;
    this.formSubmitted = false;
  }

  setRating(rate: number): void {
    this.currentRate = rate;
  }

  submitRating(): void {
    this.rating = {
      rating: this.currentRate,
      message: this.message.sanitizeXSS(),
      dateTime: new Date()
    };
    if (this.currentRate === 0) {
      this.formValid = false;
    } else {
      this.ratingService.addRating(this.rating).subscribe(
        (): void => {
          this.formValid = true;
          this.formSubmitted = true;
        }, (err: any): never => {
          throw err;
        }
      );
    }
  }

}
