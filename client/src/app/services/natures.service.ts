import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nature } from '../models/Nature';
import { environment } from '../../environments/environment';
import { JSONObject } from '../models/JSONObject';

const headers: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable()
export class NaturesService {
  private static naturesUrl: string = `${environment.apiUrl}/natures`;

  constructor(private http: HttpClient) {}

  /**
   * @summary Get all natures.
   * @description Sends a get request to /api/natures
   * @return An observable (nature array).
   */
  public getAllNatures(): Observable<Nature[]> {
    return this.http.get<Nature[]>(NaturesService.naturesUrl);
  }

  /**
   * @summary Get single nature.
   * @description Sends a get request to /api/natures/:id
   * @param id The id of the nature to get.
   * @returns An observable (nature).
   */
  public getNature(id: string): Observable<Nature> {
    const url: string = `${NaturesService.naturesUrl}/${id}`;
    return this.http.get<Nature>(url);
  }

  /**
   * @summary Add a nature.
   * @description Sends a post request to /api/natures
   * @param nature The nature to add to the database.
   * @returns An observable (nature).
   */
  public addNature(nature: Nature): Observable<Nature> {
    return this.http.post<Nature>(NaturesService.naturesUrl, nature, {
      headers
    });
  }

  /**
   * @summary Update a nature.
   * @description Sends a put request to /api/natures/:id
   * @param id The id of the nature to update.
   * @param nature The nature update data.
   * @returns An observable (nature).
   */
  public updateNature(id: string, nature: Nature): Observable<Nature> {
    const url: string = `${NaturesService.naturesUrl}/${id}`;
    return this.http.put<Nature>(url, nature, {
      headers
    });
  }

  /**
   * @summary Partially update a nature.
   * @description Sends a patch request to /api/natures/:id
   * @param id The id of the nature to partially update.
   * @param nature The nature data to partially update with.
   */
  public patchNature(id: string, nature: JSONObject): Observable<JSONObject> {
    const url: string = `${NaturesService.naturesUrl}/${id}`;
    return this.http.patch<JSONObject>(url, nature, {
      headers
    });
  }

  /**
   * @summary Delete a single nature.
   * @description Sends a delete request to /api/natures/:id
   * @param id The id of the nature to delete.
   * @returns An observable (any).
   */
  public deleteNature(id: string): Observable<JSONObject> {
    const url: string = `${NaturesService.naturesUrl}/${id}`;
    return this.http.delete<JSONObject>(url);
  }

  /**
   * @summary Delete all natures.
   * @description Sends a delete request to /api/natures
   * @returns An observable (any).
   */
  public deleteAllNatures(): Observable<JSONObject> {
    return this.http.delete<JSONObject>(NaturesService.naturesUrl);
  }

  /**
   * @summary Add all natures.
   * @description Sends a post request to add all natures to the database.
   * @returns An observable (natures array) with all natures.
   */
  public addAllNatures(): Observable<Nature[]> {
    const url: string = `${NaturesService.naturesUrl}/all`;
    return this.http.post<Nature[]>(url, {}, { headers });
  }
}
