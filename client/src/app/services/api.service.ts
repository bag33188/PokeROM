import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiVersionUrl: string = `${environment.apiUrl}/api/version`;

  constructor() { }

  public getApiVersion(): Promise<Response> {
    const apiVersion: Promise<Response> = axios.get(this.apiVersionUrl);
    return apiVersion;
  }
}
