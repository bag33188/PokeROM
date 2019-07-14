import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Nature from '../models/Nature';
import { environment } from '../../environments/environment';

const headers: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class NaturesService {
  private naturesUrl: string = `${environment.apiUrl}/api/natures`;

  constructor(private http: HttpClient) {}

  getAllNatures(): Observable<Nature[]> {
    return this.http.get<Nature[]>(this.naturesUrl);
  }

  getNature(id: string): Observable<Nature> {
    const url: string = `${this.naturesUrl}/${id}`;
    return this.http.get<Nature>(url);
  }

  addNature(nature: Nature): Observable<Nature> {
    return this.http.post<Nature>(this.naturesUrl, nature, {
      headers
    });
  }
  updateNature(id: string, nature: Nature): Observable<Nature> {
    const url: string = `${this.naturesUrl}/${id}`;
    return this.http.put<Nature>(url, nature, {
      headers
    });
  }
  patchNature(id: string, nature: any): Observable<any> {
    const url: string = `${this.naturesUrl}/${id}`;
    return this.http.patch<any>(url, nature, {
      headers
    });
  }
  deleteNature(id: string): Observable<any> {
    const url: string = `${this.naturesUrl}/${id}`;
    return this.http.delete<any>(url);
  }
  deleteAllNatures(): Observable<any> {
    return this.http.delete<any>(this.naturesUrl);
  }
}
