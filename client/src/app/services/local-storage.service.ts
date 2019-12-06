import { Injectable } from '@angular/core';
import { JSONObject } from '../models/JSONObject';
import { JSONArray } from '../interfaces/JSONArray';
import { LoggerService as logger } from './logger.service';

type JSONValue = boolean | number | string | null | JSONObject | JSONArray;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public static stateSize: number = localStorage.length;

  constructor() {}

  public static getState(key: string, asString?: boolean): JSONValue | string {
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

  public static setState(key: string, value: JSONValue): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
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
