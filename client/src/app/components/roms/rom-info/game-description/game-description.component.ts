import { Component, OnInit, Input, HostListener } from '@angular/core';
import { faFileAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Rom from '../../../../models/Rom';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit {
  @Input() rom: Rom;
  faFileAlt: IconDefinition;
  @HostListener('document:load')
  windowOnLoad(): void {
    if (this.rom) {
      this.rom.description = this.changeUrlToLink(this.rom.description);
    }
  }
  constructor() {}

  ngOnInit() {
    this.faFileAlt = faFileAlt;
  }

  isRomHack(gameName: string): boolean {
    return /ROM Hack/.test(gameName) ? true : false;
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
