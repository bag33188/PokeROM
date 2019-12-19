import { Component, OnInit } from '@angular/core';
import { Alert } from '../../../interfaces/Alert';
import { fadeOutAnimation } from '../../../animations';
import { JSONArray } from '../../../interfaces/JSONArray';
import { SessionStorageService } from '../../../services/session-storage.service';

@Component({
  selector: 'ratings-privacy-alert',
  templateUrl: './privacy-alert.component.html',
  styleUrls: ['./privacy-alert.component.scss'],
  animations: [fadeOutAnimation]
})
export class PrivacyAlertComponent implements OnInit {
  public alerts: Alert[];

  constructor() {}

  public ngOnInit(): void {
    const alert: Alert = {
      message:
        'Your rating does not store any personal information, browser data, or cookies. Your rating will only show your rating number, optional feedback message, and the date and time it was submitted.',
      type: 'info'
    };
    if (!SessionStorageService.getState('ratingAlert')) {
      SessionStorageService.setState('ratingAlert', [alert]);
    }
    this.alerts = SessionStorageService.getState('ratingAlert');
  }

  public closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    SessionStorageService.setState('ratingAlert', []);
  }
}
