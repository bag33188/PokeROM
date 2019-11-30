import { Component, OnInit } from '@angular/core';
import { Environment } from '../../../../interfaces/Environment';
import { environment } from '../../../../../environments/environment';
import { fadeOutAnimation } from '../../../../animations';

@Component({
  selector: 'app-faq-toast',
  templateUrl: './disclaimer-toast.component.html',
  styleUrls: ['./disclaimer-toast.component.scss'],
  animations: [fadeOutAnimation]
})
export class DisclaimerToastComponent implements OnInit {
  public show: boolean;
  public environment: Environment = environment;

  constructor() {}

  public ngOnInit(): void {
    if (!localStorage.getItem('show-toast')) {
      localStorage.setItem('show-toast', 'true');
    }
    this.show = JSON.parse(localStorage.getItem('show-toast'));
  }

  public closeModal(): void {
    localStorage.setItem('show-toast', 'false');
    this.show = JSON.parse(localStorage.getItem('show-toast'));
  }
}
