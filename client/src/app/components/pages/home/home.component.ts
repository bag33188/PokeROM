import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accHeading: string;

  constructor() {}

  ngOnInit() {
    this.accHeading = 'What would you like to know about?';
  }
}
