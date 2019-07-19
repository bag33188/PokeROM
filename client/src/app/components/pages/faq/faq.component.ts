import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterContentInit {
  emulatorUrl: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.emulatorUrl = 'https://www.retroarch.com';
  }

  ngAfterContentInit() {
    if (!this.route.snapshot.fragment) {
      window.scrollTo(0, 0);
    } else {
      $('#' + this.route.snapshot.fragment)[0].scrollIntoView();
    }
  }
}
