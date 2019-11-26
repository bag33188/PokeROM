import { Component, OnInit } from '@angular/core';
import {
  faInfoCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../../interfaces/Alert';
import { fadeOutAnimation } from '../../../animations';

@Component({
  selector: 'app-cookies-alert',
  templateUrl: './cookies-alert.component.html',
  styleUrls: ['./cookies-alert.component.scss'],
  animations: [fadeOutAnimation]
})
export class CookiesAlertComponent implements OnInit {
  public alerts: Alert[];
  public cookiesOk: boolean = false;
  public faInfoCircle: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    this.faInfoCircle = faInfoCircle;
    this.alerts = [
      {
        type: 'warning',
        message:
          'I hate to interrupt, but I am required to tell you that this site uses cookies to store your login data for authentication. Click the (x) icon on the top right corner of this alert to close this annoying piece of garbage.'
      }
    ];
    if (
      !sessionStorage.getItem('cookiesOk') ||
      !JSON.parse(sessionStorage.getItem('cookiesOk'))
    ) {
      sessionStorage.setItem('cookiesOk', 'false');
    }
    this.cookiesOk = JSON.parse(sessionStorage.getItem('cookiesOk'));
  }

  public closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    sessionStorage.setItem('cookiesOk', 'true');
  }
}
