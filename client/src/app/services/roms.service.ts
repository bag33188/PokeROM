import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rom } from '../models/Rom';
import { environment } from '../../environments/environment';
import { JSONObject } from '../models/JSONObject';

interface GetRequestOptions {
  limit?: number;
  pagination?: {
    page: number;
    perPage: number;
  };
  types?: {
    core?: boolean;
    hacks?: boolean;
  };
  favorites?: boolean;
}

interface DeleteRequestOptions {
  core?: boolean;
  hacks?: boolean;
}

@Injectable()
export class RomsService {
  private static romsUrl: string = `${environment.apiUrl}/roms`;

  constructor(private http: HttpClient) {}

  /**
   * @summary Get all ROMs.
   * @description Sends a get request to /api/roms
   * @param options Options for getting all ROMs.
   * @returns An observable (rom array).
   */
  public getAllRoms(options?: GetRequestOptions): Observable<Rom[]> {
    let httpParams: HttpParams = new HttpParams();
    if (options.limit) {
      httpParams = httpParams.append('_limit', options.limit.toString());
    }
    if (options.pagination) {
      if (options.pagination.page) {
        httpParams = httpParams.append(
          'page',
          options.pagination.page.toString()
        );
      }
      if (options.pagination.perPage) {
        httpParams = httpParams.append(
          'per_page',
          options.pagination.perPage.toString()
        );
      }
    }
    if (options.types) {
      if (options.types.core === true) {
        httpParams = httpParams.append(
          'core',
          JSON.stringify(options.types.core)
        );
      }
      if (options.types.hacks === true) {
        httpParams = httpParams.append(
          'hacks',
          JSON.stringify(options.types.hacks)
        );
      }
    }
    if (options.favorites && options.favorites === true) {
      httpParams = httpParams.append(
        'favorites',
        JSON.stringify(options.favorites)
      );
    }
    return this.http.get<Rom[]>(RomsService.romsUrl, {
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
    const url: string = `${RomsService.romsUrl}/${id}`;
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
    return this.http.post<Rom>(RomsService.romsUrl, rom, { headers });
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
    const url: string = `${RomsService.romsUrl}/${id}`;
    return this.http.put<Rom>(url, rom, { headers });
  }

  /**
   * @summary Partially update a ROM.
   * @description Sends a patch request to /api/roms/:id
   * @param id The id of the ROM to partially update.
   * @param partialRom The ROM partial update data.
   * @returns An observable (rom).
   */
  public patchRom(id: string, partialRom: JSONObject): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${RomsService.romsUrl}/${id}`;
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
  public deleteRom(id: string): Observable<JSONObject> {
    const url: string = `$${RomsService.romsUrl}/${id}`;
    return this.http.delete<JSONObject>(url);
  }

  /**
   * @summary Delete all ROMs.
   * @description Sends a delete request to /api/roms
   * @param options Options for deletion of ROMs.
   * @returns An observable (any).
   */
  public deleteAllRoms(options?: DeleteRequestOptions): Observable<JSONObject> {
    let httpParams: HttpParams = new HttpParams();
    if (options) {
      if (options.core === true) {
        httpParams = httpParams.append('core', JSON.stringify(options.core));
      }
      if (options.hacks === true) {
        httpParams = httpParams.append('hacks', JSON.stringify(options.hacks));
      }
    }

    return this.http.delete<JSONObject>(RomsService.romsUrl, {
      params: httpParams
    });
  }

  /**
   * @summary Get headers (all ROMs).
   * @description Sends a head request to /api/roms
   * @returns An observable (void).
   */
  public getHeadersAll(): Observable<void> {
    return this.http.head<void>(RomsService.romsUrl);
  }

  /**
   * @summary Get headers (single ROM).
   * @description Sends a head request to /api/roms/:id
   * @param id The id of the ROM to get headers from.
   * @returns An observable (void).
   */
  public getHeadersSingle(id: string): Observable<void> {
    const url: string = `${RomsService.romsUrl}/${id}`;
    return this.http.head<void>(url);
  }

  /**
   * @summary Get options info.
   * @description Sends an options request to /api/roms
   * @returns An observable (void).
   */
  public getOptionsInfo(): Observable<void> {
    return this.http.options<void>(RomsService.romsUrl);
  }

  public addCoreRoms(): Observable<Rom[]> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${RomsService.romsUrl}/core`;
    return this.http.post<Rom[]>(url, {}, { headers });
  }

  public addRomHacks(): Observable<Rom[]> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${RomsService.romsUrl}/hacks`;
    return this.http.post<Rom[]>(url, {}, { headers });
  }
}
