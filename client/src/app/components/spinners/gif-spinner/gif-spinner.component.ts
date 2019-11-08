import { Component, Input, OnInit } from '@angular/core';
import { Images } from '../../../enums/images.enum';

@Component({
  selector: 'app-gif-spinner',
  templateUrl: './gif-spinner.component.html',
  styleUrls: ['./gif-spinner.component.scss']
})
export class GifSpinnerComponent implements OnInit {
  public images: typeof Images;
  @Input() public loading: boolean;

  constructor() {}

  ngOnInit(): void {
    this.checkInput();
    this.images = Images;
  }

  private checkInput(): void | never {
    if (!this.loading) {
      throw new Error('Loading property is required.');
    }
  }
}
