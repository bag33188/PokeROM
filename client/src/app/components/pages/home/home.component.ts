import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  public accHeading: string;

  constructor() {}

  public ngOnInit(): void {
    this.accHeading = 'What would you like to know about?';
  }

  public ngAfterContentInit(): void {
    window.scrollTo(0, 0);
  }
}
