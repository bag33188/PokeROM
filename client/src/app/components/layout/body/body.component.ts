import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Log to console if current browser is incompatible with custom CSS scrollbar
    // using the navigator object.
    //
    // Vendors
    // =======
    // * Webkit Browsers: Apple Computer, Inc. (Safari), Google Inc. (Chrome and Opera)
    // * Non-Webkit Browsers: None
    if (!this.isWebKitBrowser()) {
      console.warn(
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
