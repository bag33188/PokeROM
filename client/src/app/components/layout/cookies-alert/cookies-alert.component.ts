import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import Alert from '../../../interfaces/Alert';

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
  alerts: Alert[] = [];
  cookiesOk: boolean;

  constructor() {}

  ngOnInit() {
    this.alerts = [
      {
        type: 'warning',
        message: `I hate to interrupt you, but I am required to tell you that this site uses cookies to store your login data for authentication. Click the (x) button to close this annoying piece of garbage.`
      }
    ];
    this.cookiesOk = (sessionStorage.getItem(
      'cookiesOk'
    ) as unknown) as boolean;
  }

  closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    sessionStorage.setItem('cookiesOk', 'true');
  }
}
