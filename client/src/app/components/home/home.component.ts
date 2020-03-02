import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public accHeading: string;

  constructor() {}

  public ngOnInit(): void {
    alert(navigator.userAgent);
    this.accHeading = 'What would you like to know about?';
  }
}
