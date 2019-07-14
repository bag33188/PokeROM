import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import LoggedUser from '../models/LoggedUser';
import User from '../models/User';
import RegisteredUser from '../models/RegisteredUser';
import { environment } from '../../environments/environment';
import { CookiesService } from './cookies.service';

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
    private cookieService: CookiesService
  ) {}

  public authenticateUser(user: LoggedUser): Observable<RegisteredUser> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<RegisteredUser>(this.authUrl, user, { headers });
  }

  public storeData(token: string, user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.cookieService.setCookie('token_id', token, 7);
    this.authToken = token;
    this.user = user;
  }

  public loggedOut(): boolean {
    return this.jwtHelper.isTokenExpired(this.cookieService.getCookie('token_id'));
  }

  public logout(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    this.cookieService.setCookie('token_id', '', 0);
  }
}
