import { Component, OnInit } from '@angular/core';
import { LoggerService as logger } from '../../../services/logger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  private static isWebKitBrowser(): boolean {
    return (
      /(WebKit)/i.test(navigator.appVersion) &&
      !/(Edge)/.test(navigator.userAgent)
    );
  }
  public ngOnInit(): void {
    // Log to console if current browser is incompatible with custom CSS scrollbar
    // using the navigator object.
    //
    // Vendors
    // =======
    // * Webkit Browsers: Apple Computer, Inc. (Safari), Google Inc. (Chrome and Opera)
    // * Non-Webkit Browsers: None
    if (!BodyComponent.isWebKitBrowser()) {
      logger.warn('CSS custom scrollbar not available in non-WebKit browsers.');
    }
  }

  public isHomePage(): boolean {
    const routeKey: string = '_routerState';
    return this.route[routeKey].snapshot.url === '/home';
  }
}
