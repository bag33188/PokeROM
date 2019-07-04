import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Rom from '../models/Rom';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RomsService {
  private romsUrl: string = `${environment.apiUrl}/api/roms`;

  constructor(private http: HttpClient) {}

  public getAllRoms(limit?: number): Observable<Rom[]> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id')
    });
    if (limit) {
      return this.http.get<Rom[]>(`${this.romsUrl}?_limit=${limit}`, {
        headers
      });
    } else {
      return this.http.get<Rom[]>(`${environment.apiUrl}/api/roms`, {
        headers
      });
    }
  }

  public getRom(id: string): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id')
    });
    return this.http.get<Rom>(`${this.romsUrl}/${id}`, { headers });
  }

  public addRom(rom: Rom): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id'),
      'Content-Type': 'application/json'
    });
    return this.http.post<Rom>(this.romsUrl, rom, { headers });
  }
  public updateRom(id: string, rom: Rom): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id'),
      'Content-Type': 'application/json'
    });
    return this.http.put<Rom>(`${this.romsUrl}/${id}`, rom, { headers });
  }

  public patchRom(id: string, partialRom: any): Observable<Rom> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id'),
      'Content-Type': 'application/json'
    });
    return this.http.patch<Rom>(`$${this.romsUrl}/${id}`, partialRom, {
      headers
    });
  }

  public deleteRom(id: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id')
    });
    return this.http.delete<any>(`$${this.romsUrl}/${id}`, { headers });
  }
  public deleteAllRoms(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id')
    });
    return this.http.delete<any>(this.romsUrl, { headers });
  }

  public getHeadersAll(): Observable<void> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id')
    });
    return this.http.head<void>(this.romsUrl, { headers });
  }
  public getHeadersSingle(id: string): Observable<void> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: localStorage.getItem('token_id')
    });
    return this.http.head<void>(`${this.romsUrl}/${id}`, { headers });
  }
  public getOptionsInfo(): Observable<void> {
    return this.http.options<void>(this.romsUrl);
  }
}
