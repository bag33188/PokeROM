import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import LoggedUser from '../models/LoggedUser';
import User from '../models/User';
import RegisteredUser from '../models/RegisteredUser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string = `${environment.apiUrl}/api/users/authenticate`;
  private authToken: string;
  private user: User;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  public authenticateUser(user: LoggedUser): Observable<RegisteredUser> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<RegisteredUser>(
      this.authUrl,
      user,
      { headers }
    );
  }

  public storeData(token: string, user: User): void {
    localStorage.setItem('token_id', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  public loggedOut(): boolean {
    return this.jwtHelper.isTokenExpired(localStorage.getItem('token_id'));
  }

  public logout(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
