import { Component, OnInit, Input } from '@angular/core';
import { Images } from '../../enums/images.enum';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  images: typeof Images;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit(): void {
    this.images = Images;
  }
}
