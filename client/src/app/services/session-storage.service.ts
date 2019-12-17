import { Injectable } from '@angular/core';
import { LoggerService as logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  public static stateSize: number = sessionStorage.length;

  constructor() {}

  public static getState(key: string, asString?: boolean): any {
    try {
      if (asString !== null && asString !== undefined && asString === true) {
        return sessionStorage.getItem(key);
      } else {
        return JSON.parse(sessionStorage.getItem(key));
      }
    } catch (e) {
      logger.error(e);
    }
  }

  public static setState(key: string, value: any): void {
    try {
      sessionStorage.setItem(
        key,
        value.constructor === Object || Array.isArray(value)
          ? JSON.stringify(value)
          : value
      );
    } catch (e) {
      logger.error(e);
    }
  }

  public static removeState(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      logger.error(e);
    }
  }

  public static clearState(): void {
    try {
      sessionStorage.clear();
    } catch (e) {
      logger.error(e);
    }
  }
}
