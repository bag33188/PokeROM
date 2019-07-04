import { Component } from '@angular/core';
import he from 'he';
import { ApiService } from './services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <div attr.data-name="{{ title }}" id="container-wrapper">
      <app-header></app-header>
      <app-body></app-body>
      <app-footer [appName]="title"></app-footer>
    </div>
  `,
  styles: [
    `
      @charset 'UTF-8';
    `,
    `
      #container-wrapper {
        display: block;
        margin: auto;
        padding: auto;
      }
    `
  ]
})
export class AppComponent {
  readonly title: string = 'Pok&eacute;ROM';

  constructor(private apiService: ApiService) {
    this.changeTitleIfNotProductionMode();
    this.getApiVersionIfNotProductionMode();
  }

  changeTitleIfNotProductionMode(): void {
    if (!environment.production) {
      document.title = `${he.decode(this.title)} (Beta)`;
    }
  }

  getApiVersionIfNotProductionMode(): void {
    if (!environment.production) {
      this.apiService
        .getApiVersion()
        .then((res: Response): void => {
          const keys: string[] = ['data', 'apiVersion'];
          console.log(`API Version: ${res[keys[0]][keys[1]]}`);
        })
        .catch((excptn: any): void => console.error(excptn));
    }
  }
}
