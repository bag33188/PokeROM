import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Images } from '../../../enums/images.enum';
import { LoggerService as logger } from '../../../services/logger.service';

@Component({
  selector: 'spinners-gif-spinner',
  templateUrl: './gif-spinner.component.html',
  styleUrls: ['./gif-spinner.component.scss']
})
export class GifSpinnerComponent implements OnInit, AfterContentInit {
  public images: typeof Images;
  @Input() public loading: boolean;

  constructor() {}

  public ngOnInit(): void {
    this.images = Images;
  }

  public ngAfterContentInit(): void {
    this.checkInput();
  }

  private checkInput(): void {
    if (this.loading === undefined || this.loading === null) {
      logger.error('Loading property is required.');
    }
  }
}
