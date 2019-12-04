import { Component, OnInit } from '@angular/core';

interface SvgMetaData {
  author: string;
  website: string;
  title: string;
}

@Component({
  selector: 'faq-msg-icon-svg',
  templateUrl: './msg-icon-svg.component.html',
  styleUrls: ['./msg-icon-svg.component.scss']
})
export class MsgIconSvgComponent implements OnInit {
  public svgMetadata: SvgMetaData;
  constructor() {}
  public ngOnInit(): void {
    this.svgMetadata = {
      author: 'BaptisteBriel',
      website: 'http://svgicons.sparkk.fr/',
      title: 'SVG Icons'
    };
  }
}
