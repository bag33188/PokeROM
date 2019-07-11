import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import he from 'he';
import LoggedUser from '../../../models/LoggedUser';

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
    }
  }
}
