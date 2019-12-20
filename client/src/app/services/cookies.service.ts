import { Injectable } from '@angular/core';

interface CookiesObj {
  [index: string]: string;
}

@Injectable()
export class CookiesService {
  public static cookiesLength: number = Object.keys(
    CookiesService.getAllCookies()
  ).length;

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
   * @returns The cookie (if exists).
   * Note: Generic typing is for return type on callback function.
   */
  public static checkCookie<T>(
    cookieName: string,
    callback?: (cookie: string | null) => T
  ): string | null {
    const cookie: string | undefined = CookiesService.getCookie(cookieName);
    if (callback) {
      callback(cookie === undefined ? null : cookie);
    }
    return cookie || null;
  }

  /**
   * @summary Gets all cookies in the browser.
   * @description Get all the cookies currently in the browser as an object literal.
   * @returns A cookies object literal.
   */
  private static getAllCookies(): CookiesObj {
    const pairs: string[] = document.cookie.split(';');
    const cookies: CookiesObj = {};
    pairs.forEach((undefined, i: number): void => {
      const pair: string[] = pairs[i].split('=');
      cookies[pair[0].toString().trim()] = unescape(pair.slice(1).join('='));
    });
    return cookies;
  }
}
