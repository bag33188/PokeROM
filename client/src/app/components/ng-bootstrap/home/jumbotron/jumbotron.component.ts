import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../../../services/cookies.service';

@Component({
  selector: 'app-home-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public loggedIn(): boolean {
    return !!CookiesService.getCookie('user');
  }
}
