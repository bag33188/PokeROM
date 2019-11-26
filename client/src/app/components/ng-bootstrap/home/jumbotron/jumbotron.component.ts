import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../../../services/cookies.service';

@Component({
  selector: 'app-home-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  private key: string;
  constructor() {}

  ngOnInit(): void {
    this.key = 'user';
  }

  public loggedIn(): boolean {
    return !!CookiesService.getCookie(this.key);
  }
}
