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
   * @returns The cookie (or undefined if the cookie does not exist).
   */
  public static getCookie(cookieName: string): string | undefined {
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
    return undefined;
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
    now.setTime(now.getTime() + expireDays * 24 * 60 ** 2 * 1000);
    const expires: string = `expires=${now.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  /**
   * @summary Check a cookie.
   * @description Check's if a cookie exists.
   * @param cookieName The name of the cookie to check.
   * @param callback The callback function to execute when cookie is found or not found.
   * @returns nothing (void).
   * Note: Generic typing is for return type on callback function.
   */
  public static checkCookie<T>(
    cookieName: string,
    callback: (cookie: string | null) => T
  ): void {
    const cookie: string | undefined = CookiesService.getCookie(cookieName);
    callback(cookie === undefined ? null : cookie);
  }
}
