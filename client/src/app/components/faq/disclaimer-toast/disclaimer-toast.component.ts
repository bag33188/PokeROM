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
  public environment: Environment;

  constructor() {}

  public ngOnInit(): void {
    this.environment = environment;
    if (!LocalStorageService.getState<boolean>('show_toast')) {
      LocalStorageService.setState<boolean>('show_toast', true);
    }
    this.show = LocalStorageService.getState<boolean>('show_toast');
  }

  public closeModal(): void {
    LocalStorageService.setState<boolean>('show_toast', false);
    this.show = LocalStorageService.getState<boolean>('show_toast');
  }
}
