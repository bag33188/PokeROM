import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ApiVersion from '../models/ApiVersion';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiVersionUrl: string = `${environment.apiUrl}/api/version`;

  constructor(private http: HttpClient) {}

  public getApiVersion(): Observable<ApiVersion> {
    return this.http.get<ApiVersion>(this.apiVersionUrl);
  }
}
