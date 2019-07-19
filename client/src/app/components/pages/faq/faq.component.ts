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
  emulatorUrl: string;
  @ViewChild('cookies', { static: true }) cookiesElement: ElementRef;
  @ViewChild('browserCompatibility', { static: true })
  browserCompatibilityElement: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.emulatorUrl = 'https://www.retroarch.com';
  }

  ngAfterContentInit() {
    switch (this.route.snapshot.fragment) {
      case 'browser-compatibility':
        this.browserCompatibilityElement.nativeElement.scrollIntoView({
          block: 'start'
        });
        break;
      case 'cookies':
        this.cookiesElement.nativeElement.scrollIntoView({
          block: 'start'
        });
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  }
}
