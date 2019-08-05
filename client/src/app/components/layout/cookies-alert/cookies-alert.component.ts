import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  faInfoCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../../interfaces/Alert';

@Component({
  selector: 'app-cookies-alert',
  templateUrl: './cookies-alert.component.html',
  styleUrls: ['./cookies-alert.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('in', style({ opacity: 1 })),
      transition(':leave', animate(555, style({ opacity: 0 })))
    ])
  ]
})
export class CookiesAlertComponent implements OnInit {
  alerts: Alert[];
  cookiesOk: boolean = false;
  faInfoCircle: IconDefinition;

  constructor() {}

  ngOnInit() {
    this.faInfoCircle = faInfoCircle;
    this.alerts = [
      {
        type: 'warning',
        message:
          'I hate to interrupt, but I am required to tell you that this site uses cookies to store your login token for authentication. Click the (x) icon on the top right corner of this alert to close this annoying piece of garbage.'
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

  closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    sessionStorage.setItem('cookiesOk', 'true');
  }
}
