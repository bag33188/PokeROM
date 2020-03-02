import { Component, OnInit, Input, HostListener } from '@angular/core';
import { faDownload, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CookiesService } from '../../../../services/cookies.service';
import { User } from '../../../../models/User';

@Component({
  selector: 'roms-info-rom-download',
  templateUrl: './rom-download.component.html',
  styleUrls: ['./rom-download.component.scss']
})
export class RomDownloadComponent implements OnInit {
  @Input() public downloadLink: string;
  public btnDisabled: boolean;
  public faDownload: IconDefinition;

  @HostListener('window:resize')
  public disableBtnIfMobileOrTablet(): boolean {
    if (
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      /Android/i.test(navigator.userAgent)
    ) {
      this.btnDisabled =
        (JSON.parse(CookiesService.getCookie('user')) as { id: string }).id !==
        '5e5c8af0ba33da08279219a0';
      // this.btnDisabled = true;
      return true;
    } else {
      this.btnDisabled = false;
      return false;
    }
  }

  constructor() {}

  public ngOnInit(): void {
    this.faDownload = faDownload;
    this.disableBtnIfMobileOrTablet();
  }
}
