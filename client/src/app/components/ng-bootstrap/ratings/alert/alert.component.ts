import {Component, OnInit} from '@angular/core';
import Alert from '../../../../interfaces/Alert';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('in', style({opacity: 1})),
      transition(':leave', animate(555, style({opacity: 0})))
    ])
  ]
})
export class AlertComponent implements OnInit {
  alerts: Alert[];

  constructor() {
  }

  ngOnInit() {
    const alert: Alert = {
      message: 'Your rating does not store any personal information, browser data, or cookies. Your rating will only show your rating number, optional feedback message, and the date and time it was submitted.',
      type: 'info'
    };
    if (!sessionStorage.getItem('rating-alert')) {
      sessionStorage.setItem('rating-alert', JSON.stringify([
        alert
      ]));
    }
    this.alerts = JSON.parse(sessionStorage.getItem('rating-alert'));
  }

  closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    sessionStorage.setItem('rating-alert', JSON.stringify([]));
  }
}
