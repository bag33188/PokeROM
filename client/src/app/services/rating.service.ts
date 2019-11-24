import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from '../models/Rating';
import { environment } from '../../environments/environment';
import { JSONObject } from '../models/JSONObject';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private ratingsUrl: string = `${environment.apiUrl}/ratings`;
  constructor(private http: HttpClient) {}

  public addRating(rating: Rating): Observable<Rating> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Rating>(this.ratingsUrl, rating, { headers });
  }
  public getRating(id: string): Observable<Rating> {
    const url: string = `${this.ratingsUrl}/${id}`;
    return this.http.get<Rating>(url);
  }
  public getRatings(limit?: number): Observable<Rating[]> {
    if (limit) {
      const url: string = `${this.ratingsUrl}?_limit=${limit}`;
      return this.http.get<Rating[]>(url);
    } else {
      return this.http.get<Rating[]>(this.ratingsUrl);
    }
  }
  public deleteRating(id: string): Observable<JSONObject> {
    const url: string = `${this.ratingsUrl}/${id}`;
    return this.http.delete<JSONObject>(url);
  }
  public deleteAllRatings(): Observable<JSONObject> {
    return this.http.delete<JSONObject>(this.ratingsUrl);
  }
  public ratingHeaders(id: string): Observable<void> {
    const url: string = `${this.ratingsUrl}/${id}`;
    return this.http.head<void>(url);
  }
  public allRatingsHeaders(): Observable<void> {
    return this.http.head<void>(this.ratingsUrl);
  }
}
