import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import Rating from '../models/Rating';
import {CookiesService} from './cookies.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private ratingsUrl: string = `${environment.apiUrl}/ratings`;
  constructor(private http: HttpClient, private cookieService: CookiesService) { }

  public addRating(rating: Rating): Observable<Rating> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.cookieService.getCookie('token_id'),
      'Content-Type': 'application/json'
    });
    return this.http.post<Rating>(this.ratingsUrl, rating, {headers});
  }
}
