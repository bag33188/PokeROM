/// <reference path="../../../interfaces/Alert.ts"/>

import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-beta-version-alert',
  templateUrl: './beta-version-alert.component.html',
  styleUrls: ['./beta-version-alert.component.scss']
})
export class BetaVersionAlertComponent implements OnInit, AfterViewInit {
  isBeta: boolean;
  alerts: Alert[];

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.betaVersionAlert();
  }

  ngAfterViewInit() {
    const betaVerAlertId: string = this.elRef.nativeElement.offsetParent.attributes[1].nodeValue;
    if (this.isBeta) {
      // close alert after 3 seconds
      setTimeout((): void => {
        // fade out alert during 1 second
        $('#' + betaVerAlertId).fadeOut(1000 /* 1 second */, (): void =>
          this.closeAlert(this.alerts[0])
        );
      }, 3000 /* 3 seconds */);
    }
  }

  betaVersionAlert(): void {
    this.isBeta = !environment.production ? true : false;
    const betaVersionAlert: Alert = {
      type: 'danger',
      message: 'THIS WEB APP IS STILL IN BETA VERSIONING'
    };
    if (sessionStorage.getItem('beta-version-alert') !== JSON.stringify([])) {
      if (environment.production) {
        sessionStorage.setItem('beta-version-alert', JSON.stringify([]));
      } else {
        sessionStorage.setItem('beta-version-alert', JSON.stringify([betaVersionAlert]));
      }
    }
    this.alerts = JSON.parse(sessionStorage.getItem('beta-version-alert'));
  }

  closeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    sessionStorage.setItem('beta-version-alert', JSON.stringify(this.alerts));
  }
}
