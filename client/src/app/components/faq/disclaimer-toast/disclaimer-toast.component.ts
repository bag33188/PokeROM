import { Component, OnInit } from '@angular/core';
import { Environment } from '../../../interfaces/Environment';
import { environment } from '../../../../environments/environment';
import { fadeOutAnimation } from '../../../animations';
import { LocalStorageService as localState } from '../../../services/local-storage.service';
import { disconnect } from 'pm2';

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

  private static getToastState(): boolean {
    return localState.getState<boolean>('show_toast');
  }

  public ngOnInit(): void {
    this.environment = environment;
    // const showToast: boolean = localState.getState<boolean>('show_toast');
    if (
      DisclaimerToastComponent.getToastState() === null ||
      DisclaimerToastComponent.getToastState() === undefined
    ) {
      localState.setState<boolean>('show_toast', true);
    }
    this.show = DisclaimerToastComponent.getToastState();
  }

  public closeModal(): void {
    localState.setState<boolean>('show_toast', false);
    this.show = DisclaimerToastComponent.getToastState();
  }
}
