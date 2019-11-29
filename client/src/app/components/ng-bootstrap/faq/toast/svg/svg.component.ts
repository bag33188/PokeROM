import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-toast-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  public svgMetadata: { [index: string]: string };
  constructor() {}
  public ngOnInit(): void {
    this.svgMetadata = {
      author: 'BaptisteBriel',
      website: 'http://svgicons.sparkk.fr/',
      title: 'SVG Icons'
    };
  }
}
