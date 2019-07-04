import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  browsers: { [index: string]: string }[];

  constructor() {}

  ngOnInit() {
    this.browsers = [
      {
        browser: 'Chrome',
        status: 'Compatible'
      },
      {
        browser: 'Opera',
        status: 'Compatible'
      },
      {
        browser: 'Safari',
        status: 'Compatible'
      },
      {
        browser: 'Firefox',
        status: 'Compatible'
      },
      {
        browser: 'Edge',
        status: 'Compatible'
      },
      {
        browser: 'Internet Explorer',
        status: 'Incompatible'
      }
    ];
  }
}
