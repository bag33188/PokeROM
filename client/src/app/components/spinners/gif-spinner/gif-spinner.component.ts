import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Images } from '../../../enums/images.enum';
import { LoggerService as logger } from '../../../services/logger.service';

@Component({
  selector: 'app-gif-spinner',
  templateUrl: './gif-spinner.component.html',
  styleUrls: ['./gif-spinner.component.scss']
})
export class GifSpinnerComponent implements OnInit, AfterViewInit {
  public images: typeof Images;
  @Input() public loading: boolean;

  constructor() {}

  public ngOnInit(): void {
    this.images = Images;
  }

  public ngAfterViewInit(): void | never {
    this.checkInput();
  }

  private checkInput(): void | never {
    if (this.loading === undefined || this.loading === null) {
      logger.error('Loading property is required.');
    }
  }
}
