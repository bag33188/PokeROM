import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  faExclamationTriangle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import Alert from '../../../interfaces/Alert';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-beta-version-alert',
  templateUrl: './beta-version-alert.component.html',
  styleUrls: ['./beta-version-alert.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('in', style({ opacity: 1 })),
      transition(':leave', animate(555, style({ opacity: 0 })))
    ])
  ]
})
export class BetaVersionAlertComponent implements OnInit, AfterViewInit {
  isBeta: boolean;
  alerts: Alert[];
  betaVerAlertId: string;
  faExclamationTriangle: IconDefinition;

  constructor() {}

  ngOnInit() {
    this.faExclamationTriangle = faExclamationTriangle;
    this.isBeta = !environment.production;
    this.setBetaVersionAlert();
    this.getBetaVersionAlert();
  }

  ngAfterViewInit() {
    this.fadeOutAlert();
  }

  getBetaVersionAlert(): void {
    this.alerts = JSON.parse(sessionStorage.getItem('beta-version-alert'));
  }

  setBetaVersionAlert(): void {
    const betaVersionAlert: Alert = {
      type: 'danger',
      message: 'THIS WEB APP IS STILL IN BETA VERSION'
    };
    if (this.isBeta) {
      if (sessionStorage.getItem('beta-version-alert') !== JSON.stringify([])) {
        sessionStorage.setItem(
          'beta-version-alert',
          JSON.stringify([betaVersionAlert])
        );
      }
    } else {
      sessionStorage.removeItem('beta-version-alert');
      // sessionStorage.setItem('beta-version-alert', JSON.stringify([]));
    }
  }

  closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    sessionStorage.setItem('beta-version-alert', JSON.stringify(this.alerts));
  }

  fadeOutAlert(): void {
    if (
      this.isBeta &&
      sessionStorage.getItem('beta-version-alert') !== JSON.stringify([])
    ) {
      // close alert after 3 seconds
      setTimeout((): void => {
        // fade out alert during 1 second
        $('#' + this.betaVerAlertId).fadeOut(
          1000,
          function(): void {
            this.closeAlert(this.alerts[0]);
          }.bind(this, BetaVersionAlertComponent) // bind `this` to component
        );
      }, 2015); // 2.015 seconds
    }
  }

  setBetaVersionAlertId(element: HTMLDivElement): void {
    this.betaVerAlertId = element.id;
  }
}
