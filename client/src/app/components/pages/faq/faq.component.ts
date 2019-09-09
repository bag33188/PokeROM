import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterContentInit {
  public emulatorUrl: string;
  @ViewChild('cookies', { static: true }) private cookiesElement: ElementRef;
  @ViewChild('browserCompatibility', { static: true })
  private browserCompatibilityElement: ElementRef;
  public computerUrls: string[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.emulatorUrl = 'https://www.retroarch.com';
    this.computerUrls = [
      'https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2080-ti/', // cpu
      'https://www.intel.com/content/www/us/en/products/processors/core/i9-processors/i9-9900k.html' // gpu
    ];
  }

  ngAfterContentInit(): void {
    switch (this.route.snapshot.fragment) {
      case 'browser-compatibility':
        this.browserCompatibilityElement.nativeElement.scrollIntoView();
        break;
      case 'cookies':
        this.cookiesElement.nativeElement.scrollIntoView();
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  }
}
