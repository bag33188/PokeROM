import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  emulatorUrl: string;

  constructor() {}

  ngOnInit() {
    this.emulatorUrl = 'https://www.retroarch.com';
  }
}
