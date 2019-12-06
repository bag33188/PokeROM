import { Component, OnInit } from '@angular/core';
import { Environment } from '../../../interfaces/Environment';
import { environment } from '../../../../environments/environment';
import { fadeOutAnimation } from '../../../animations';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'faq-disclaimer-toast',
  templateUrl: './disclaimer-toast.component.html',
  styleUrls: ['./disclaimer-toast.component.scss'],
  animations: [fadeOutAnimation]
})
export class DisclaimerToastComponent implements OnInit {
  public show: boolean;
  public environment: Environment = environment;

  constructor() {}

  public ngOnInit(): void {
    if (!LocalStorageService.getState('show-toast')) {
      LocalStorageService.setState('show-toast', 'true');
    }
    this.show = LocalStorageService.getState('show-toast') as boolean;
  }

  public closeModal(): void {
    LocalStorageService.setState('show-toast', 'false');
    this.show = LocalStorageService.getState('show-toast') as boolean;
  }
}
