import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoggedUser } from '../models/LoggedUser';
import { User } from '../models/User';
import { RegisteredUser } from '../models/RegisteredUser';
import { CookiesService } from './cookies.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string = `${environment.apiUrl}/users/authenticate`;

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private cookieService: CookiesService
  ) {}

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

  public loadToken(): string {
    return this.cookieService.getCookie('token_id');
  }

  /**
   * @summary Stores the user data in local storage and the JWT as a cookie.
   * @param token The Bearer token (aka the JWT).
   * @param user The user data.
   * @returns nothing (void).
   */
  public storeData(token: string, user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.cookieService.setCookie('token_id', token, 7);
  }

  /**
   * @summary Checks if the JWT is expired.
   * @returns True if the JWT is expired, false if it's not.
   */
  public loggedOut(): boolean {
    return this.jwtHelper.isTokenExpired(
      this.cookieService.getCookie('token_id')
    );
  }

  /**
   * @summary Logs out the user.
   * @description Clears local storage, sets authToken and user to null, and clears the token_id cookie.
   */
  public logout(): void {
    localStorage.clear();
    this.cookieService.setCookie('token_id', '', 0);
  }
}
