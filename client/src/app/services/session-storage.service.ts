import { Injectable } from '@angular/core';
import { LoggerService as logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  public static stateSize: number = sessionStorage.length;

  constructor() {}

  public static getState<T>(key: string): T {
    try {
      return JSON.parse(sessionStorage.getItem(key)) as T;
    } catch (e) {
      logger.error(e);
    }
  }

  public static setState<T>(key: string, value: T): void {
    try {
      sessionStorage.setItem(key, (value.constructor === Object ||
      Array.isArray(value)
        ? JSON.stringify(value)
        : value) as string);
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
