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
    const urlRegex: RegExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    const url: string = description.match(urlRegex)[0];
    return description.replace(
      url,
      `<a href="${url}" target="_blank">${url}</a>`
    );
  }
}
