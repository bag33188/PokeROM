import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-toast-svg',
  templateUrl: './msg-icon-svg.component.html',
  styleUrls: ['./msg-icon-svg.component.scss']
})
export class MsgIconSvgComponent implements OnInit {
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
