import { Injectable } from '@angular/core';
import { LoggerService as logger } from './logger.service';
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../interfaces/JSONArray';

type JSONValue = boolean | number | string | null | JSONObject | JSONArray;

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  public static stateSize: number = sessionStorage.length;

  constructor() {}

  public static getState(key: string, asString?: boolean): JSONValue | string {
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

  public static setState(key: string, value: JSONValue): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
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
