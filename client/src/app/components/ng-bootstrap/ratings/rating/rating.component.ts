import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ratings-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rate: number;
  @Output() currentRate: EventEmitter<number> = new EventEmitter();
  @Output() currentRateHover: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.rate = 0;
  }

  outputRating(rate: number): void {
    this.currentRate.emit(rate);
  }

  outputRatingHover(rate: number): void {
    this.currentRateHover.emit(rate);
  }
}
