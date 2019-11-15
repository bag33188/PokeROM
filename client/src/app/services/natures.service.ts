import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nature } from '../models/Nature';
import { environment } from '../../environments/environment';
import { JSONObject } from '../models/JSON';

const headers: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class NaturesService {
  private naturesUrl: string = `${environment.apiUrl}/natures`;

  constructor(private http: HttpClient) {}

  /**
   * @summary Get all natures.
   * @description Sends a get request to /api/natures
   * @return An observable (nature array).
   */
  getAllNatures(): Observable<Nature[]> {
    return this.http.get<Nature[]>(this.naturesUrl);
  }

  /**
   * @summary Get single nature.
   * @description Sends a get request to /api/natures/:id
   * @param id The id of the nature to get.
   * @returns An observable (nature).
   */
  getNature(id: string): Observable<Nature> {
    const url: string = `${this.naturesUrl}/${id}`;
    return this.http.get<Nature>(url);
  }

  /**
   * @summary Add a nature.
   * @description Sends a post request to /api/natures
   * @param nature The nature to add to the database.
   * @returns An observable (nature).
   */
  addNature(nature: Nature): Observable<Nature> {
    return this.http.post<Nature>(this.naturesUrl, nature, {
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
  updateNature(id: string, nature: Nature): Observable<Nature> {
    const url: string = `${this.naturesUrl}/${id}`;
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
  patchNature(id: string, nature: JSONObject): Observable<any> {
    const url: string = `${this.naturesUrl}/${id}`;
    return this.http.patch<any>(url, nature, {
      headers
    });
  }

  /**
   * @summary Delete a single nature.
   * @description Sends a delete request to /api/natures/:id
   * @param id The id of the nature to delete.
   * @returns An observable (any).
   */
  deleteNature(id: string): Observable<any> {
    const url: string = `${this.naturesUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  /**
   * @summary Delete all natures.
   * @description Sends a delete request to /api/natures
   * @returns An observable (any).
   */
  deleteAllNatures(): Observable<any> {
    return this.http.delete<any>(this.naturesUrl);
  }
}
