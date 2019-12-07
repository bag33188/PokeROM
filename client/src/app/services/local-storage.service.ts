import { Injectable } from '@angular/core';
import { LoggerService as logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public static stateSize: number = localStorage.length;

  constructor() {}

  public static getState(key: string, asString?: boolean): any {
    try {
      if (asString !== null && asString !== undefined && asString === true) {
        return localStorage.getItem(key);
      } else {
        return JSON.parse(localStorage.getItem(key));
      }
    } catch (e) {
      logger.error(e);
    }
  }

  public static setState(key: string, value: any): void {
    try {
      localStorage.setItem(
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
      localStorage.removeItem(key);
    } catch (e) {
      logger.error(e);
    }
  }

  public static clearState(): void {
    try {
      localStorage.clear();
    } catch (e) {
      logger.error(e);
    }
  }
}
