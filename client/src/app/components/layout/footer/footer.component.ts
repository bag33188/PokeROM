import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() appName: string;

  constructor() { }

  ngOnInit() {
  }

  getYear(): number {
    const now: Date = new Date();
    const year: number = now.getFullYear(); // now.getUTCFullYear()
    return year;
  }

}
