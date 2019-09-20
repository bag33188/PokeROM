import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ratings-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  public rate: number;
  @Output() private currentRate: EventEmitter<number> = new EventEmitter<
    number
  >();
  @Output() private currentRateHover: EventEmitter<number> = new EventEmitter<
    number
  >();
  constructor() {}

  ngOnInit(): void {
    this.rate = 0;
  }

  public outputRating(rate: number): void {
    this.currentRate.emit(rate);
  }

  public outputRatingHover(rate: number): void {
    this.currentRateHover.emit(rate);
  }
}
