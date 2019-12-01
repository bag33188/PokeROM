import { Component } from '@angular/core';
import { LoggerService as logger } from './services/logger.service';
import { ApiService } from './services/api.service';
import { ApiVersion } from './models/ApiVersion';
import { environment } from '../environments/environment';
import { JSONObject } from './models/JSONObject';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <!-- begin page container/wrapper -->
      <div attr.data-name="{{ title }}" id="container-wrapper">
        <section class="header">
          <layout-header></layout-header>
        </section>
        <section class="body">
          <layout-body></layout-body>
        </section>
        <section class="footer">
          <layout-footer [appName]="title"></layout-footer>
        </section>
      </div>
      <!-- end page container/wrapper -->
    </ng-container>
  `,
  styles: [
    `
      /* CSS Global Variables/Custom Properties */
      ::ng-deep :root {
        --cw-display: table;
        --comp-display: table-row;
        --part-display: table-cell;
      }
    `,
    `
      #container-wrapper {
        display: var(--cw-display);
      }
      .header,
      .body,
      .footer {
        display: var(--comp-display);
      }
      layout-body,
      layout-header,
      layout-footer {
        display: var(--part-display);
      }
    `
  ]
})
export class AppComponent {
  protected static readonly _eacute: string = '\u00E9';
  public _title: string = `Pok${AppComponent._eacute}ROM`;
  private apiVersionObs$: Observable<ApiVersion>;
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  constructor(private apiService: ApiService) {
    this.changeTitleIfDevEnv();
    this.getApiVersionIfDevEnv();
    if (location.protocol === 'https:') {
      ApiService.storeApiVersionInCache();
    }
  }

  private changeTitleIfDevEnv(): void {
    if (!environment.production) {
      document.title = `${this.title} (Beta)`;
    }
  }

  private getApiVersionIfDevEnv(): void {
    if (!environment.production) {
      let success: boolean;
      this.apiVersionObs$ = this.apiService.getApiVersion();
      const apiVersionSub: Subscription = this.apiVersionObs$.subscribe(
        (res: ApiVersion): void => {
          success = true;
          logger.log(`API Version: ${res.api_version}`);
        },
        (err: JSONObject): never => {
          success = false;
          throw err;
        },
        (): void => {
          if (success !== undefined && success !== null) {
            apiVersionSub.unsubscribe();
          }
        }
      );
    }
  }
}
