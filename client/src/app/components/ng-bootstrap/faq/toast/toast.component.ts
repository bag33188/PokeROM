import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Environment } from '../../../../interfaces/Environment';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-faq-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('in', style({ opacity: 1 })),
      transition(':leave', animate(555, style({ opacity: 0 })))
    ])
  ]
})
export class ToastComponent implements OnInit {
  public show: boolean;
  public environment: Environment = environment;

  constructor() {}

  ngOnInit(): void {
    if (!localStorage.getItem('show-toast')) {
      localStorage.setItem('show-toast', 'true');
    }
    this.show = JSON.parse(localStorage.getItem('show-toast'));
  }

  public closeModal(): void {
    localStorage.setItem('show-toast', 'false');
    this.show = JSON.parse(localStorage.getItem('show-toast'));
    // setTimeout((): boolean => (this.show = true), 5000);
  }
}
