import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import LoggedUser from '../models/LoggedUser';
import User from '../models/User';
import RegisteredUser from '../models/RegisteredUser';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string = `${environment.apiUrl}/api/users/authenticate`;
  private authToken: string;
  private user: User;

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private apiService: ApiService
  ) {}

  public authenticateUser(user: LoggedUser): Observable<RegisteredUser> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<RegisteredUser>(this.authUrl, user, { headers });
  }

  public storeData(token: string, user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.apiService.setCookie('token_id', token, 7);
    this.authToken = token;
    this.user = user;
  }

  public loggedOut(): boolean {
    return this.jwtHelper.isTokenExpired(this.apiService.getCookie('token_id'));
  }

  public logout(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    this.apiService.setCookie('token_id', '', 0);
  }
}
