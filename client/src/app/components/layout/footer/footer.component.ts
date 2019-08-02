import { Component, OnInit, Input, isDevMode } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() appName: string;
  isDevMode: boolean;

  constructor() {
    this.isDevMode = isDevMode();
  }

  ngOnInit() {
  }

  getYear(): number {
    const now: Date = new Date();
    const year: number = now.getFullYear(); // now.getUTCFullYear()
    return year;
  }
}
