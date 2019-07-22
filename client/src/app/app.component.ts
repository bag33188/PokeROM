import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggerService} from './services/logger.service';
import {ApiService} from './services/api.service';
import ApiVersion from './models/ApiVersion';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <!-- begin page container/wrapper -->
      <div attr.data-name="{{ title }}" id="container-wrapper">
        <section>
          <app-header></app-header>
        </section>
        <section>
          <app-body></app-body>
        </section>
        <section [ngClass]="{ 'bg-info': isHomePage() }">
          <app-footer [appName]="title"></app-footer>
        </section>
      </div>
      <!-- end page container/wrapper -->
    </ng-container>
  `,
  styles: [
      `
      /* CSS Global Vars */
      ::ng-deep :root {
        --mp-prop-val: auto;
      }
    `,
      `
      #container-wrapper {
        display: block;
        margin: var(--mp-prop-val);
        padding: var(--mp-prop-val);
      }
    `
  ]
})
export class AppComponent {
  readonly title: string = 'PokéROM';

  constructor(
    private logger: LoggerService,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.changeTitleIfDevEnv();
    this.getApiVersionIfDevEnv();
  }

  changeTitleIfDevEnv(): void {
    if (!environment.production) {
      document.title = `${this.title} (Beta)`;
    }
  }

  getApiVersionIfDevEnv(): void {
    if (!environment.production) {
      this.apiService.getApiVersion().subscribe(
        (res: ApiVersion): void => {
          this.logger.log(`API Version: ${res.apiVersion}`);
        },
        (err: any): never => {
          throw err;
        }
      );
    }
  }

  isHomePage(): boolean {
    const routeKey: string = '_routerState';
    return this.route[routeKey].snapshot.url === '/home';
  }
}
