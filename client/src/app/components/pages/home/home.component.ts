import {Component, OnInit, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  accHeading: string;

  constructor() {
  }

  ngOnInit() {
    this.accHeading = 'What would you like to know about?';
  }

  ngAfterContentInit() {
    window.scrollTo(0, 0);
  }
}
