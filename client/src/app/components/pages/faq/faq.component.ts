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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.emulatorUrl = 'https://www.retroarch.com';
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
