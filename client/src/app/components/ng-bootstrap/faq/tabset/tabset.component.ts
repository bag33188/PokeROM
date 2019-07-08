/// <reference path="../../../../interfaces/Browser.ts" />

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  browsers: Browser[];

  constructor() {}

  ngOnInit() {
    this.browsers = [
      {
        browser: 'Chrome',
        status: 'Compatible',
        minVersion: 58
      },
      {
        browser: 'Opera',
        status: 'Compatible',
        minVersion: 44
      },
      {
        browser: 'Safari',
        status: 'Compatible',
        minVersion: 10.1
      },
      {
        browser: 'Firefox',
        status: 'Compatible',
        minVersion: 54
      },
      {
        browser: 'Edge',
        status: 'Compatible',
        minVersion: 16
      },
      {
        browser: 'Internet Explorer',
        status: 'Incompatible',
        minVersion: null
      }
    ];
  }
}
