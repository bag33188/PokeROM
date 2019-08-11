import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Browser } from '../../../../interfaces/Browser';
import { ModalContentComponent } from '../modal/modal-content.component';
import {
  faChrome,
  faFirefox,
  faInternetExplorer,
  faOpera,
  faEdge,
  faSafari,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-faq-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  browsers: Browser[];
  faChrome: IconDefinition = faChrome;
  faFirefox: IconDefinition = faFirefox;
  faInternetExplorer: IconDefinition = faInternetExplorer;
  faOpera: IconDefinition = faOpera;
  faEdge: IconDefinition = faEdge;
  faSafari: IconDefinition = faSafari;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.browsers = [
      {
        browser: 'Chrome',
        status: 'Compatible',
        minVersion: 58,
        minYear: ['early', 2017],
        icon: this.faChrome
      },
      {
        browser: 'Opera',
        status: 'Compatible',
        minVersion: 44,
        minYear: ['late', 2017],
        icon: this.faOpera
      },
      {
        browser: 'Safari',
        status: 'Compatible',
        minVersion: 10.1,
        minYear: ['mid', 2017],
        icon: this.faSafari
      },
      {
        browser: 'Firefox',
        status: 'Compatible',
        minVersion: 54,
        minYear: ['early', 2017],
        icon: this.faFirefox
      },
      {
        browser: 'Edge',
        status: 'Compatible',
        minVersion: 16,
        minYear: ['late', 2017],
        icon: this.faEdge
      },
      {
        browser: 'Internet Explorer',
        status: 'Incompatible',
        minVersion: null,
        minYear: null,
        icon: this.faInternetExplorer
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
