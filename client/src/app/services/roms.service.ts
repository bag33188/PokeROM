import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rom } from '../models/Rom';
import { environment } from '../../environments/environment';

/*
 * headers.append(name: string, value: string | string[])
 * headers.set(name: string, value: string | string[])
 * headers.delete(name: string)
 */

@Injectable({
  providedIn: 'root'
})
export class RomsService {
  private romsUrl: string = `${environment.apiUrl}/roms`;

  constructor(private http: HttpClient) {}

  /**
   * @summary Get all ROMs.
   * @description Sends a get request to /api/roms
   * @param limit The number of roms to limit.
   * @param page Pagination: page number.
   * @param perPage Pagination: how many per page.
   * @param core If wanting to get all core ROMs, set to true.
   * @param hacks If wanting to get all ROM hacks, set to true.
   * @returns An observable (rom array).
   */
  public getAllRoms(
    limit?: number,
    page?: number,
    perPage?: number,
    core?: boolean,
    hacks?: boolean
  ): Observable<Rom[]> {
    let httpParams: HttpParams = new HttpParams();

    if (limit) {
      httpParams = httpParams.append('_limit', limit.toString());
    }
    if (page) {
      httpParams = httpParams.append('page', page.toString());
    }
    if (perPage) {
      httpParams = httpParams.append('per_page', perPage.toString());
    }
    if (core) {
      httpParams = httpParams.append('core', JSON.stringify(core));
    }
    if (hacks) {
      httpParams = httpParams.append('hacks', JSON.stringify(hacks));
    }
    return this.http.get<Rom[]>(this.romsUrl, {
      params: httpParams
    });
  }

  /**
   * @summary Get a single ROM.
   * @description Sends a get request to /api/roms/:id
   * @param id The id of the ROM to get.
   * @returns An observable (rom).
   */
  public getRom(id: string): Observable<Rom> {
    const url: string = `${this.romsUrl}/${id}`;
    return this.http.get<Rom>(url);
  }

  /**
   * @summary Add a ROM.
   * @description Sends a post request to /api/roms
   * @param rom The ROM to add.
   * @returns An observable (rom).
   */
  public addRom(rom: Rom): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Rom>(this.romsUrl, rom, { headers });
  }

  /**
   * @summary Update a ROM.
   * @description Sends a put request to /api/roms/:id
   * @param id The id of the ROM to update.
   * @param rom The ROM update data.
   * @returns An observable (rom).
   */
  public updateRom(id: string, rom: Rom): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${this.romsUrl}/${id}`;
    return this.http.put<Rom>(url, rom, { headers });
  }

  /**
   * @summary Partially update a ROM.
   * @description Sends a patch request to /api/roms/:id
   * @param id The id of the ROM to partially update.
   * @param partialRom The ROM partial update data.
   * @returns An observable (rom).
   */
  public patchRom(id: string, partialRom: any): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `$${this.romsUrl}/${id}`;
    return this.http.patch<Rom>(url, partialRom, {
      headers
    });
  }

  /**
   * @summary Delete a single ROM.
   * @description Sends a delete request to /api/roms/:id
   * @param id The id of the ROM to delete.
   * @returns An observable (any).
   */
  public deleteRom(id: string): Observable<any> {
    const url: string = `$${this.romsUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  /**
   * @summary Delete all ROMs.
   * @description Sends a delete request to /api/roms
   * @param core Delete all core ROMs.
   * @param hacks Delete all ROM hacks.
   * @returns An observable (any).
   */
  public deleteAllRoms(core?: boolean, hacks?: boolean): Observable<any> {
    let httpParams: HttpParams = new HttpParams();
    if (core) {
      httpParams = httpParams.append('core', JSON.stringify(core));
    }
    if (hacks) {
      httpParams = httpParams.append('hacks', JSON.stringify(hacks));
    }
    return this.http.delete<any>(this.romsUrl, { params: httpParams });
  }

  /**
   * @summary Get headers (all ROMs).
   * @description Sends a head request to /api/roms
   * @returns An observable (void).
   */
  public getHeadersAll(): Observable<void> {
    return this.http.head<void>(this.romsUrl);
  }

  /**
   * @summary Get headers (single ROM).
   * @description Sends a head request to /api/roms/:id
   * @param id The id of the ROM to get headers from.
   * @returns An observable (void).
   */
  public getHeadersSingle(id: string): Observable<void> {
    const url: string = `${this.romsUrl}/${id}`;
    return this.http.head<void>(url);
  }

  /**
   * @summary Get options info.
   * @description Sends an options request to /api/roms
   * @returns An observable (void).
   */
  public getOptionsInfo(): Observable<void> {
    return this.http.options<void>(this.romsUrl);
  }
}
