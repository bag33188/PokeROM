import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JSONObject } from '../models/JSONObject';

@Injectable()
export class UserService {
  private static userUrl: string = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) {}

  public registerUser(
    user: User
  ): Observable<{ success: boolean; message: string }> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${UserService.userUrl}/register`;
    return this.http.post<{ success: boolean; message: string }>(url, user, {
      headers
    });
  }

  public updateUser(id: string, user: User): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${UserService.userUrl}/${id}`;
    return this.http.put<User>(url, user, { headers });
  }

  public getUser(id: string): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${UserService.userUrl}/${id}`;
    return this.http.get<User>(url, { headers });
  }

  public deleteUser(id: string): Observable<JSONObject> {
    const url: string = `${UserService.userUrl}/${id}`;
    return this.http.delete<JSONObject>(url);
  }

  public patchUser(id: string, user: JSONObject): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${UserService.userUrl}/${id}`;
    return this.http.patch<User>(url, user, { headers });
  }
}
