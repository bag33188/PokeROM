import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Browser } from '../../../interfaces/Browser';
import { IeModalContentComponent } from '../ie-modal-content/ie-modal-content.component';
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
  selector: 'faq-browser-tabset',
  templateUrl: './browser-tabset.component.html',
  styleUrls: ['./browser-tabset.component.scss']
})
export class BrowserTabsetComponent implements OnInit {
  public browsers: Browser[];
  public faChrome: IconDefinition;
  public faFirefox: IconDefinition;
  public faInternetExplorer: IconDefinition;
  public faOpera: IconDefinition;
  public faEdge: IconDefinition;
  public faSafari: IconDefinition;

  constructor(private modalService: NgbModal) {}

  public ngOnInit(): void {
    this.faChrome = faChrome;
    this.faFirefox = faFirefox;
    this.faInternetExplorer = faInternetExplorer;
    this.faOpera = faOpera;
    this.faEdge = faEdge;
    this.faSafari = faSafari;
    this.browsers = [
      {
        browserName: 'Chrome',
        status: 'Compatible',
        minVersion: 58,
        minYear: ['early', 2017],
        icon: this.faChrome
      },
      {
        browserName: 'Opera',
        status: 'Compatible',
        minVersion: 44,
        minYear: ['late', 2017],
        icon: this.faOpera
      },
      {
        browserName: 'Safari',
        status: 'Compatible',
        minVersion: 10.1,
        minYear: ['mid', 2017],
        icon: this.faSafari
      },
      {
        browserName: 'Firefox',
        status: 'Compatible',
        minVersion: 54,
        minYear: ['early', 2017],
        icon: this.faFirefox
      },
      {
        browserName: 'Edge',
        status: 'Compatible',
        minVersion: 16,
        minYear: ['late', 2017],
        icon: this.faEdge
      },
      {
        browserName: 'Internet Explorer',
        status: 'Incompatible',
        minVersion: null,
        minYear: null,
        icon: this.faInternetExplorer
      }
    ];
  }

  public openModal() {
    const modalRef: NgbModalRef = this.modalService.open(
      IeModalContentComponent,
      {
        centered: true,
        scrollable: true
      }
    );
    modalRef.componentInstance.reasons = [
      'It does not support CSS grid',
      'It does not support ES6 JavaScript',
      'It has many security issues',
      'It is slow',
      'It just sucks'
    ];
  }
}
