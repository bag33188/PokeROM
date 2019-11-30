import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ratings-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  public rate: number;
  @Output() public currentRate: EventEmitter<number> = new EventEmitter<
    number
  >();
  @Output() public currentRateHover: EventEmitter<number> = new EventEmitter<
    number
  >();
  constructor() {}

  public ngOnInit(): void {
    this.rate = 0;
  }

  public outputRating(rate: number): void {
    this.currentRate.emit(rate);
  }

  public outputRatingHover(rate: number): void {
    this.currentRateHover.emit(rate);
  }
}
