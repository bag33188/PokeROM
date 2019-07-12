import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiVersionUrl: string = `${environment.apiUrl}/api/version`;

  constructor() {}

  public getApiVersion(): Promise<Response> {
    const apiVersion: Promise<Response> = axios.get(this.apiVersionUrl);
    return apiVersion;
  }

  public getCookie(cname: string): string {
    const name: string = `${cname}=`;
    const decodedCookie: string = decodeURIComponent(document.cookie);
    const ca: string[] = decodedCookie.split(';');
    // tslint:disable-next-line: prefer-for-of
    for (let i: number = 0; i < ca.length; i++) {
      let c: string = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  public setCookie(cname: string, cvalue: string, exdays: number): void {
    const d: Date = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires: string = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }
}
