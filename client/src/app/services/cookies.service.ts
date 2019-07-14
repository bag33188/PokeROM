import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  constructor() {}
  public getCookie(cookieName: string): string {
    const name: string = `${cookieName}=`;
    const decodedCookie: string = decodeURIComponent(document.cookie);
    const cookieArray: string[] = decodedCookie.split(';');
    for (const cookieData of cookieArray) {
      let cookie: string = cookieData;
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  }

  public setCookie(
    cookieName: string,
    cookieValue: string,
    expireDays: number
  ): void {
    const now: Date = new Date();
    now.setTime(now.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires: string = `expires=${now.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  public checkCookie(
    cookieName: string,
    expireDays: number,
    callbacks: any[]
  ): void {
    const cookie: string = this.getCookie(cookieName);
    if (cookie !== '') {
      callbacks[0]();
    } else {
      callbacks[1]();
      if (cookie !== '' && cookie != null) {
        this.setCookie(cookieName, cookie, expireDays);
      }
    }
  }
}
