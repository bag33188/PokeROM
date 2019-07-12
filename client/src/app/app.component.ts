import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ApiService } from './services/api.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <!-- begin page container/wrapper -->
      <div attr.data-name="{{ title }}" id="container-wrapper">
        <app-header></app-header>
        <app-body></app-body>
        <app-footer [appName]="title"></app-footer>
      </div>
      <!-- end page container/wrapper -->
    </ng-container>
  `,
  styles: [
    `
      /* CSS charset */
      @charset "UTF-8";
    `,
    `
      #container-wrapper {
        --mp-prop-val: auto;
        display: block;
        margin: var(--mp-prop-val);
        padding: var(--mp-prop-val);
      }
    `
  ]
})
export class AppComponent {
  readonly title: string = 'PokéROM';

  constructor(private logger: LoggerService, private apiService: ApiService) {
    this.changeTitleIfDevMode();
    this.getApiVersionIfDevMode();
  }

  changeTitleIfDevMode(): void {
    if (!environment.production) {
      document.title = `${this.title} (Beta)`;
    }
  }

  getApiVersionIfDevMode(): void {
    if (!environment.production) {
      this.apiService
        .getApiVersion()
        .then(
          (res: Response): void => {
            const keys: string[] = ['data', 'apiVersion'];
            this.logger.log(`API Version: ${res[keys[0]][keys[1]]}`);
          }
        )
        .catch((err: any): void => this.logger.error(err));
    }
  }
}
