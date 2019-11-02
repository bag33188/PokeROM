import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public raphnetWebsite: string;
  public raphnetSoftware: string;
  public raphnetProduct: string;

  constructor(private config: NgbAccordionConfig) {
    this.config.type = 'light';
  }

  ngOnInit(): void {
    this.raphnetWebsite = 'https://www.raphnet-tech.com';
    this.raphnetSoftware =
      'https://www.raphnet-tech.com/products/adapter_manager/index.php';
    this.raphnetProduct =
      'https://www.raphnet-tech.com/products/n64_usb_adapter_gen3/index.php';
  }
}
