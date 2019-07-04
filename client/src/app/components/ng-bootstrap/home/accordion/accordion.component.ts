import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  constructor(private config: NgbAccordionConfig) {
    this.config.type = 'warning';
  }

  ngOnInit() {}

  raphnet(): object {
    enum Raphnet {
      SOFTWARE = 'https://www.raphnet-tech.com/products/adapter_manager/index.php',
      PRODUCT = 'https://www.raphnet-tech.com/products/n64_usb_adapter_gen3/index.php'
    }
    return Raphnet;
  }
}
