/// <reference path="../../../../interfaces/Browser.ts" />

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal/modal-content.component';

@Component({
  selector: 'app-faq-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  browsers: Browser[];

  constructor(private modalService: NgbModal) {}

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

  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.reasons = [
      'It does not support CSS grid',
      'It does not support ES6 JavaScript',
      'It has many security issues',
      'It is slow'
    ];
  }
}
