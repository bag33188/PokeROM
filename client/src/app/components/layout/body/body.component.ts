import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    // Log to console if current browser is incompatible with custom CSS scrollbar
    // using the navigator object.
    //
    // Vendors
    // =======
    // * Webkit Browsers: Apple Computer, Inc. (Safari), Google Inc. (Chrome and Opera)
    // * Non-Webkit Browsers: None
    if (!this.isWebKitBrowser()) {
      this.logger.warn(
        'CSS custom scrollbar not available in non-WebKit browsers.'
      );
    }
  }

  isWebKitBrowser(): boolean {
    return (
      /(?:(WebKit))/i.test(navigator.appVersion) &&
      !/Edge/.test(navigator.userAgent)
    );
  }
}
