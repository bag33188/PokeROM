import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public loggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
