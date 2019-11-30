import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../../services/cookies.service';

@Component({
  selector: 'home-showcase-jumbotron',
  templateUrl: './showcase-jumbotron.component.html',
  styleUrls: ['./showcase-jumbotron.component.scss']
})
export class ShowcaseJumbotronComponent implements OnInit {
  private key: string;
  constructor() {}

  public ngOnInit(): void {
    this.key = 'user';
  }

  public loggedIn(): boolean {
    return !!CookiesService.getCookie(this.key);
  }
}
