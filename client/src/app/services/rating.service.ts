import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Rating from '../models/Rating';
import { CookiesService } from './cookies.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private ratingsUrl: string = `${environment.apiUrl}/ratings`;
  constructor(
    private http: HttpClient,
    private cookieService: CookiesService
  ) {}

  public addRating(rating: Rating): Observable<Rating> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Rating>(this.ratingsUrl, rating, { headers });
  }
  public getRating(id: string): Observable<Rating> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    const url: string = `${this.ratingsUrl}/${id}`;
    return this.http.get<Rating>(url, { headers });
  }
  public getRatings(limit?: number): Observable<Rating[]> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    if (limit) {
      const url: string = `${this.ratingsUrl}?_limit=${limit}`;
      return this.http.get<Rating[]>(url, {
        headers
      });
    } else {
      return this.http.get<Rating[]>(this.ratingsUrl, {
        headers
      });
    }
  }
  public deleteRating(id: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    const url: string = `${this.ratingsUrl}/${id}`;
    return this.http.delete<any>(url, { headers });
  }
  public deleteAllRatings(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    return this.http.delete<any>(this.ratingsUrl, { headers });
  }
  public ratingHeaders(id: string): Observable<void> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    const url: string = `${this.ratingsUrl}/${id}`;
    return this.http.head<void>(url, { headers });
  }
  public allRatingsHeaders(): Observable<void> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id')
    });
    return this.http.head<void>(this.ratingsUrl, { headers });
  }
}
