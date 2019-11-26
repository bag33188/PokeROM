import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoggedUser } from '../models/LoggedUser';
import { User } from '../models/User';
import { RegisteredUser } from '../models/RegisteredUser';
import { CookiesService } from './cookies.service';
import { environment } from '../../environments/environment';
import { cookie } from 'express-validator/check';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string = `${environment.apiUrl}/users/authenticate`;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  public static loadToken(): string {
    return CookiesService.getCookie('token_id');
  }
  /**
   * @summary Logs out the user.
   * @description Clears local storage, sets authToken and user to null, and clears the token_id cookie.
   */
  public static logout(): void {
    localStorage.clear();
    CookiesService.setCookie('token_id', '', 0);
    CookiesService.setCookie('user', '', 0);
  }
  /**
   * @summary Stores the user data in local storage and the JWT as a cookie.
   * @param token The Bearer token (aka the JWT).
   * @param user The user data.
   * @returns nothing (void).
   */
  public static storeData(token: string, user: User): void {
    CookiesService.setCookie('user', JSON.stringify(user), 7);
    CookiesService.setCookie('token_id', token.replace('Bearer ', ''), 7);
  }

  /**
   * @summary Authenticates a User.
   * @description Sends a post to request to /api/users/authenticate
   * @param user The logged user data.
   * @returns An observable.
   */
  public authenticateUser(user: LoggedUser): Observable<RegisteredUser> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<RegisteredUser>(this.authUrl, user, { headers });
  }

  public loggedOut(): boolean {
    return (
      this.jwtHelper.isTokenExpired(CookiesService.getCookie('token_id')) ||
      !CookiesService.checkCookie<unknown>('token_id')
    );
  }
}
