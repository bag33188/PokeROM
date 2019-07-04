import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Nature from '../models/Nature';
import { environment } from 'src/environments/environment';

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
    return this.http.get<Nature>(`${this.naturesUrl}/${id}`);
  }

  addNature(nature: Nature): Observable<Nature> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Nature>(this.naturesUrl, nature, {
      headers
    });
  }
  updateNature(id: string, nature: Nature): Observable<Nature> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Nature>(`${this.naturesUrl}/${id}`, nature, {
      headers
    });
  }
  patchNature(id: string, nature: any): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.patch<any>(`${this.naturesUrl}/${id}`, nature, {
      headers
    });
  }
  deleteNature(id: string): Observable<any> {
    return this.http.delete<any>(`${this.naturesUrl}/${id}`);
  }
  deleteAllNatures(): Observable<any> {
    return this.http.delete<any>(this.naturesUrl);
  }
}
