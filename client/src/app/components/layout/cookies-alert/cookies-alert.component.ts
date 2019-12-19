import { Component, OnInit } from '@angular/core';
import {
  faInfoCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../../interfaces/Alert';
import { fadeOutAnimation } from '../../../animations';
import { SessionStorageService } from '../../../services/session-storage.service';

@Component({
  selector: 'layout-cookies-alert',
  templateUrl: './cookies-alert.component.html',
  styleUrls: ['./cookies-alert.component.scss'],
  animations: [fadeOutAnimation]
})
export class CookiesAlertComponent implements OnInit {
  public alerts: Alert[];
  public cookiesOk: boolean;
  public faInfoCircle: IconDefinition;

  constructor() {}

  public ngOnInit(): void {
    this.cookiesOk = false;
    this.faInfoCircle = faInfoCircle;
    this.alerts = [
      {
        type: 'warning',
        message:
          'I hate to interrupt, but I am required to tell you that this site uses cookies to store your login data for authentication. Click the (x) icon on the top right corner of this alert to close this annoying piece of garbage.'
      }
    ];
    if (!SessionStorageService.getState<boolean>('cookies_ok')) {
      SessionStorageService.setState<boolean>('cookies_ok', false);
    }
    this.cookiesOk = SessionStorageService.getState<boolean>('cookies_ok');
  }

  public closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    SessionStorageService.setState<boolean>('cookies_ok', true);
  }
}
