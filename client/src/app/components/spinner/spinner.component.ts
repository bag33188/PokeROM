import { Component, OnInit, Input } from '@angular/core';
import { Images } from '../../enums/images.enum';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public images: typeof Images;
  @Input() public loading: boolean;

  constructor() {}

  ngOnInit(): void {
    this.images = Images;
  }
}
