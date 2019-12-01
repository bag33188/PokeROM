import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'roms-info-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit {
  @Input() public description: string;
  @Input() private finishedLoading: boolean;

  constructor() {}
  static changeUrlToLink(description: string): string {
    const urlRegex: RegExp = /(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gim;
    if (urlRegex.test(description)) {
      const url: string = description.match(urlRegex)[0];
      return description.replace(
        url,
        `<a href="${url}" target="_blank" rel="noreferrer">${url}</a>`
      );
    } else {
      return description;
    }
  }
  public ngOnInit(): void {
    if (this.finishedLoading) {
      if (this.description) {
        this.description = GameDescriptionComponent.changeUrlToLink(
          this.description
        );
      }
    }
  }
}
