import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-toast-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  svgMetadata: { [index: string]: string };
  constructor() {}
  ngOnInit(): void {
    this.svgMetadata = {
      author: 'BaptisteBriel',
      website: 'http://svgicons.sparkk.fr/',
      title: 'SVG Icons'
    };
  }
}
