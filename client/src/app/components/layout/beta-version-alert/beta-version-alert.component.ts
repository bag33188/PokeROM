import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
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

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.isBeta = !environment.production ? true : false;
    this.setBetaVersionAlert();
    this.getBetaVersionAlert();
    this.setBetaVersionAlertId();
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
      message: 'THIS WEB APP IS STILL IN BETA VERSIONING'
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

  setBetaVersionAlertId(): void {
    if (/Edge/.test(navigator.userAgent)) {
      this.betaVerAlertId = this.elRef.nativeElement.offsetParent.attributes[0].nodeValue;
    } else {
      this.betaVerAlertId = this.elRef.nativeElement.offsetParent.attributes[1].nodeValue;
    }
  }
}
