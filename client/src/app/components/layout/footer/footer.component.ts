import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Environment } from '../../../interfaces/Environment';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public appName: string;
  public environment: Environment;
  public author: string;

  constructor() {}

  public ngOnInit(): void {
    this.environment = environment;
    this.author = 'Broccolini';
  }

  public getYear(): number {
    const now: Date = new Date();
    return now.getFullYear(); // now.getUTCFullYear();
  }
}
