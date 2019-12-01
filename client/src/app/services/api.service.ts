import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiVersion } from '../models/ApiVersion';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService as logger } from './logger.service';

@Injectable()
export class ApiService {
  private static apiVersionUrl: string = `${environment.apiUrl}/version`;
  public static storeApiVersionInCache(): void {
    const apiVersion: Promise<Cache> = caches.open('api_version');
    apiVersion
      .then(
        (cache: Cache): Promise<void> =>
          cache.add(`${environment.apiUrl}/version`)
      )
      .catch((err: object): void => logger.log(err));
  }
  constructor(private http: HttpClient) {}

  /**
   * @summary Gets the API's Version.
   * @description Sends a get request to /api/version.
   * @returns An observable (api version).
   */
  public getApiVersion(): Observable<ApiVersion> {
    const headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json'
    });
    return this.http.get<ApiVersion>(ApiService.apiVersionUrl, { headers });
  }
}
