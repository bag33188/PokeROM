import { Component, OnInit, Input, HostListener } from '@angular/core';
import { faDownload, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../../environments/environment';
import { Environment } from '../../../../interfaces/Environment';

@Component({
  selector: 'roms-info-rom-download',
  templateUrl: './rom-download.component.html',
  styleUrls: ['./rom-download.component.scss']
})
export class RomDownloadComponent implements OnInit {
  @Input() public downloadLink: string;
  public btnDisabled: boolean;
  public faDownload: IconDefinition;
  public environment: Environment;

  @HostListener('window:resize')
  public disableBtnIfMobileOrTablet(): boolean {
    if (
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      /Android/i.test(navigator.userAgent)
    ) {
      this.btnDisabled = true;
      return true;
    } else {
      this.btnDisabled = false;
      return false;
    }
  }

  constructor() {}

  public ngOnInit(): void {
    this.environment = environment;
    this.faDownload = faDownload;
    this.disableBtnIfMobileOrTablet();
  }
}
