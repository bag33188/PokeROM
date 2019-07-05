import { Component, OnInit, AfterContentInit } from '@angular/core';
import he from 'he';
import LoggedUser from '../../../models/LoggedUser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterContentInit {
  login: LoggedUser;
  sourceCodeUrl: string;

  constructor() {}

  ngOnInit() {
    this.login = {
      username: 'bag33188',
      password: he.decode('&#x31;&#x32;&#x33;&#x34;&#x35;&#x36;&#x37;&#x38;')
    };
    this.sourceCodeUrl = 'https://github.com/bag33188/Pokemon-ROMs-Project';
  }

  ngAfterContentInit() {
    window.scrollTo(0, 0);
  }
}
