import { Component, OnInit } from '@angular/core';
import { Alert } from '../../../../interfaces/Alert';
import { fadeOutAnimation } from '../../../../animations';

@Component({
  selector: 'app-ratings-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [fadeOutAnimation]
})
export class AlertComponent implements OnInit {
  public alerts: Alert[];

  constructor() {}

  ngOnInit(): void {
    const alert: Alert = {
      message:
        'Your rating does not store any personal information, browser data, or cookies. Your rating will only show your rating number, optional feedback message, and the date and time it was submitted.',
      type: 'info'
    };
    if (!sessionStorage.getItem('rating-alert')) {
      sessionStorage.setItem('rating-alert', JSON.stringify([alert]));
    }
    this.alerts = JSON.parse(sessionStorage.getItem('rating-alert'));
  }

  public closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    sessionStorage.setItem('rating-alert', JSON.stringify([]));
  }
}
