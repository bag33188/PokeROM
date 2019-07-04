import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.error(`Error 404: Page Not Found - "${this.pathName()}"`);
  }

  pathName(): string {
    return location.pathname;
  }

}
