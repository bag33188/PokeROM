import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoggedUser } from '../models/LoggedUser';
import { User } from '../models/User';
import { RegisteredUser } from '../models/RegisteredUser';
import { CookiesService as cookies } from './cookies.service';
import { environment } from '../../environments/environment';
import { LocalStorageService as localState } from './local-storage.service';

@Injectable()
export class AuthService {
  private static authUrl: string = `${environment.apiUrl}/users/authenticate`;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  public static loadToken(): string {
    return cookies.getCookie('token_id');
  }
  /**
   * @summary Logs out the user.
   * @description Clears local storage, sets authToken and user to null, and clears the token_id cookie.
   */
  public static logout(): void {
    localState.clearState();
    cookies.setCookie('token_id', '', 0);
    cookies.setCookie('user', '', 0);
  }
  /**
   * @summary Stores the user data in local storage and the JWT as a cookie.
   * @param token The Bearer token (aka the JWT).
   * @param user The user data.
   * @returns nothing (void).
   */
  public static storeData(token: string, user: User): void {
    cookies.setCookie('user', JSON.stringify(user), 7);
    cookies.setCookie('token_id', token.replace('Bearer ', ''), 7);
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
    return this.http.post<RegisteredUser>(AuthService.authUrl, user, {
      headers
    });
  }

  public loggedOut(): boolean {
    return (
      this.jwtHelper.isTokenExpired(cookies.getCookie('token_id')) ||
      !cookies.checkCookie<unknown>('token_id')
    );
  }
}
