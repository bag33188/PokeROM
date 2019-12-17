import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ImagesEnum } from '../../../enums/images.enum';
import { ImageUrlsEnum } from '../../../enums/image-urls.enum';
import { LoggerService as logger } from '../../../services/logger.service';

@Component({
  selector: 'spinners-gif-spinner',
  templateUrl: './gif-spinner.component.html',
  styleUrls: ['./gif-spinner.component.scss']
})
export class GifSpinnerComponent implements OnInit, AfterContentInit {
  public images: typeof ImagesEnum;
  public fallbackUrl: string;
  @Input() public loading: boolean;
  @ViewChild('spinnerImg') public spinnerImage: ElementRef;

  constructor() {}

  public ngOnInit(): void {
    this.fallbackUrl = ImageUrlsEnum.SPINNER;
    this.images = ImagesEnum;
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
