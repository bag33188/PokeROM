import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import Raphnet from '../../../../enums/raphnet.enum';

@Component({
  selector: 'app-home-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  raphnet: typeof Raphnet;

  constructor(private config: NgbAccordionConfig) {
    this.config.type = 'secondary';
  }

  ngOnInit() {
    this.raphnet = Raphnet;
  }
}
