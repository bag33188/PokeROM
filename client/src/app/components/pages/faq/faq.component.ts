import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  emulatorUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.emulatorUrl = 'https://www.retroarch.com';
    if (!this.route.snapshot.fragment) {
      window.scrollTo(0, 0);
    } else {
      $('#' + this.route.snapshot.fragment)[0].scrollIntoView();
      // window.location.hash = this.route.snapshot.fragment;
    }
  }
}
