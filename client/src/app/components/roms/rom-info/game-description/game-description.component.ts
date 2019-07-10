import { Component, OnInit, Input } from '@angular/core';
import Rom from '../../../../models/Rom';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit {
  @Input() rom: Rom;

  constructor() {}

  ngOnInit() {
    setTimeout((): void => {
      this.rom.description = this.changeUrlToLink(this.rom.description);
    }, 1000);
  }

  isRomHack(gameName: string): boolean {
    return /ROM Hack/g.test(gameName) ? true : false;
  }

  changeUrlToLink(description: string): string {
    const urlRegex: RegExp = /(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/i;
    if (urlRegex.test(description)) {
      const url: string = description.match(urlRegex)[0];
      return description.replace(
        url,
        `<a href="${url}" target="_blank">${url}</a>`
      );
    } else {
      return description;
    }
  }
}
