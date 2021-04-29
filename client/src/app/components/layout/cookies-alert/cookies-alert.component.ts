import { Component, OnInit } from '@angular/core';
import {
  faInfoCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../../interfaces/Alert';
import { fadeOutAnimation } from '../../../animations';
import { SessionStorageService as sessionState } from '../../../services/session-storage.service';

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
    const cookieMsg: string =
      'I hate to interrupt, but I am required to tell you that this site uses cookies to store your login data for authentication. Click the (x) icon on the top right corner of this alert to close this annoying piece of garbage.';
    this.alerts = [
      {
        type: 'warning',
        message: cookieMsg
      }
    ];
    if (!sessionState.getState<boolean>('cookies_ok')) {
      sessionState.setState<boolean>('cookies_ok', false);
    }
    this.cookiesOk = sessionState.getState<boolean>('cookies_ok');
  }

  public closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    sessionState.setState<boolean>('cookies_ok', true);
  }
}
