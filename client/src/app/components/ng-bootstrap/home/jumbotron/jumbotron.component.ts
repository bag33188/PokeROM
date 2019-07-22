import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  loggedIn(): boolean {
    return localStorage.getItem('user') ? true : false;
  }
}
