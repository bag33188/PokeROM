import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService as logger } from './services/logger.service';
import { ApiService } from './services/api.service';
import { ApiVersion } from './models/ApiVersion';
import { environment } from '../environments/environment';

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
      ::ng-deep :root {
        --default-box-sizing: border-box;
        --container-wrapper-display: block;
        --default-margin-value: auto;
        --default-padding-value: initial;
      }
    `,
    `
      #container-wrapper {
        box-sizing: var(--default-box-sizing);
        display: var(--container-wrapper-display);
        margin: var(--default-margin-value);
        padding: var(--default-padding-value);
      }
    `
  ]
})
export class AppComponent {
  public readonly title: string = 'PokéROM';

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.changeTitleIfDevEnv();
    this.getApiVersionIfDevEnv();
    if (location.protocol === 'https:') {
      this.apiService.storeApiVersionInCache();
    }
  }

  private changeTitleIfDevEnv(): void {
    if (!environment.production) {
      document.title = `${this.title} (Beta)`;
    }
  }

  private getApiVersionIfDevEnv(): void {
    if (!environment.production) {
      this.apiService.getApiVersion().subscribe(
        (res: ApiVersion): void => {
          logger.log(`API Version: ${res.api_version}`);
        },
        (err: any): never => {
          throw err;
        }
      );
    }
  }

  public isHomePage(): boolean {
    const routeKey: string = '_routerState';
    return this.route[routeKey].snapshot.url === '/home';
  }
}
