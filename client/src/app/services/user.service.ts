import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) {}

  public registerUser(
    user: User
  ): Observable<{ success: boolean; message: string }> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<{ success: boolean; message: string }>(
      `${this.userUrl}/register`,
      user,
      { headers }
    );
  }

  public updateUser(id: string, user: User): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${this.userUrl}/${id}`;
    return this.http.put<User>(url, user, { headers });
  }

  public getUser(id: string): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url: string = `${this.userUrl}/${id}`;
    return this.http.get<User>(url, { headers });
  }

  public deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.userUrl}/${id}`);
  }
}
