import {Component, OnInit, Input} from '@angular/core';
import Environment from '../../../interfaces/Environment';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() appName: string;
  environment: Environment;

  constructor() {
  }

  ngOnInit() {
    this.environment = environment;
  }

  getYear(): number {
    const now: Date = new Date();
    const year: number = now.getFullYear(); // now.getUTCFullYear()
    return year;
  }
}
