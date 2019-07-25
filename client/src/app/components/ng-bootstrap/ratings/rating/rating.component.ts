import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rate: number;
  @Output() currentRate: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.rate = 0;
  }

  outputRating(): void {
    this.currentRate.emit(this.rate);
  }

  outputRateHover(rate: number): void {
    this.currentRate.emit(rate);
  }

}
