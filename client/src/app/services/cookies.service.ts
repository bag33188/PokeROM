import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  constructor() {}

  /**
   * @summary Get cookie.
   * @description Gets a cookie based on its name.
   * @param cookieName The name of the cookie to get.
   * @returns The cookie.
   */
  public static getCookie(cookieName: string): string {
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

  /**
   * @summary Set Cookie.
   * @description Adds/sets a cookie in the browser.
   * @param cookieName The name of the cookie to set.
   * @param cookieValue The value to assign to the cookie.
   * @param expireDays How many days until the cookie expires.
   * @returns nothing (void).
   */
  public static setCookie(
    cookieName: string,
    cookieValue: string,
    expireDays: number
  ): void {
    const now: Date = new Date();
    now.setTime(now.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires: string = `expires=${now.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  /**
   * @summary Check a cookie.
   * @description Validates a cookie's value.
   * @param cookieName The name of the cookie to check.
   * @param expireDays The number of days until the cookie expires.
   * @param callbacks The callback functions.
   * @returns nothing (void).
   */
  public checkCookie<T, K>(
    cookieName: string,
    expireDays: number,
    callbacks: [() => T, () => K]
  ): void {
    const cookie: string = CookiesService.getCookie(cookieName);
    if (cookie !== '') {
      callbacks[0]();
    } else {
      callbacks[1]();
      if (cookie !== '' && cookie != null) {
        CookiesService.setCookie(cookieName, cookie, expireDays);
      }
    }
  }
}
