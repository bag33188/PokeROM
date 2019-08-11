import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Environment } from '../../../interfaces/Environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() appName: string;
  environment: Environment;

  constructor() {
    this.environment = environment;
  }

  ngOnInit(): void {}

  getYear(): number {
    const now: Date = new Date();
    const year: number = now.getFullYear(); // now.getUTCFullYear()
    return year;
  }
}
