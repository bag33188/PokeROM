import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterContentInit {
  emulatorUrl: string;

  constructor() {}

  ngOnInit() {
    this.emulatorUrl = 'https://www.retroarch.com';
  }

  ngAfterContentInit() {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }
}
