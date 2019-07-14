import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Rom from '../models/Rom';
import { environment } from '../../environments/environment';
import { CookiesService } from './cookies.service';

/*
 * headers.append(name: string, value: string | string[])
 * headers.set(name: string, value: string | string[])
 * headers.delete(name: string)
 */

@Injectable({
  providedIn: 'root'
})
export class RomsService {
  private romsUrl: string = `${environment.apiUrl}/api/roms`;

  constructor(
    private http: HttpClient,
    private cookieService: CookiesService
  ) {}

  public getAllRoms(limit?: number): Observable<Rom[]> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    if (limit) {
      const url: string = `${this.romsUrl}?_limit=${limit}`;
      return this.http.get<Rom[]>(url, {
        headers
      });
    } else {
      return this.http.get<Rom[]>(this.romsUrl, {
        headers
      });
    }
  }

  public getRom(id: string): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    const url: string = `${this.romsUrl}/${id}`;
    return this.http.get<Rom>(url, { headers });
  }

  public addRom(rom: Rom): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id'),
      'Content-Type': 'application/json'
    });
    return this.http.post<Rom>(this.romsUrl, rom, { headers });
  }
  public updateRom(id: string, rom: Rom): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id'),
      'Content-Type': 'application/json'
    });
    const url: string = `${this.romsUrl}/${id}`;
    return this.http.put<Rom>(url, rom, { headers });
  }

  public patchRom(id: string, partialRom: any): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id'),
      'Content-Type': 'application/json'
    });
    const url: string = `$${this.romsUrl}/${id}`;
    return this.http.patch<Rom>(url, partialRom, {
      headers
    });
  }

  public deleteRom(id: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    const url: string = `$${this.romsUrl}/${id}`;
    return this.http.delete<any>(url, { headers });
  }
  public deleteAllRoms(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    return this.http.delete<any>(this.romsUrl, { headers });
  }

  public getHeadersAll(): Observable<void> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    return this.http.head<void>(this.romsUrl, { headers });
  }
  public getHeadersSingle(id: string): Observable<void> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    const url: string = `${this.romsUrl}/${id}`;
    return this.http.head<void>(url, { headers });
  }
  public getOptionsInfo(): Observable<void> {
    return this.http.options<void>(this.romsUrl);
  }
}
