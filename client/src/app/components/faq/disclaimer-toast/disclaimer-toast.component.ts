import { Component, OnInit } from '@angular/core';
import { Environment } from '../../../interfaces/Environment';
import { environment } from '../../../../environments/environment';
import { fadeOutAnimation } from '../../../animations';
import { LocalStorageService as localState } from '../../../services/local-storage.service';

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
    if (
      localState.getState<boolean>('show_toast') === null ||
      localState.getState<boolean>('show_toast') === undefined
    ) {
      localState.setState<boolean>('show_toast', true);
    }
    this.show = localState.getState<boolean>('show_toast');
  }

  public closeModal(): void {
    localState.setState<boolean>('show_toast', false);
    this.show = localState.getState<boolean>('show_toast');
  }
}
