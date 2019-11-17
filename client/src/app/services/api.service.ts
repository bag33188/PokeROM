import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiVersion } from '../models/ApiVersion';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiVersionUrl: string = `${environment.apiUrl}/version`;

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
    return this.http.get<ApiVersion>(this.apiVersionUrl, { headers });
  }

  public storeApiVersionInCache(): void {
    const apiVersion: Promise<Cache> = caches.open('api_version');
    apiVersion
      .then(
        (cache: Cache): Promise<void> =>
          cache.add(`${environment.apiUrl}/version`)
      )
      .catch((err: object): never => {
        throw err;
      });
  }
}
