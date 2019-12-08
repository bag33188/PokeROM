import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from '../models/Rating';
import { environment } from '../../environments/environment';
import { JSONObject } from '../models/JSONObject';

@Injectable()
export class RatingService {
  private static ratingsUrl: string = `${environment.apiUrl}/ratings`;
  constructor(private http: HttpClient) {}

  public addRating(rating: Rating): Observable<Rating> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Rating>(RatingService.ratingsUrl, rating, {
      headers
    });
  }
  public getRating(id: string): Observable<Rating> {
    const url: string = `${RatingService.ratingsUrl}/${id}`;
    return this.http.get<Rating>(url);
  }
  public getRatings(limit?: number): Observable<Rating[]> {
    if (limit) {
      let httpParams: HttpParams = new HttpParams();
      httpParams = httpParams.append('_limit', limit.toString());
      return this.http.get<Rating[]>(RatingService.ratingsUrl, {
        params: httpParams
      });
    } else {
      return this.http.get<Rating[]>(RatingService.ratingsUrl);
    }
  }
  public deleteRating(id: string): Observable<JSONObject> {
    const url: string = `${RatingService.ratingsUrl}/${id}`;
    return this.http.delete<JSONObject>(url);
  }
  public deleteAllRatings(): Observable<JSONObject> {
    return this.http.delete<JSONObject>(RatingService.ratingsUrl);
  }
  public ratingHeaders(id: string): Observable<void> {
    const url: string = `${RatingService.ratingsUrl}/${id}`;
    return this.http.head<void>(url);
  }
  public allRatingsHeaders(): Observable<void> {
    return this.http.head<void>(RatingService.ratingsUrl);
  }
}
