import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}

  /**
   * @summary Log msg to console.
   * @description Logs a message to the console.
   * @param msg The message to log.
   * @returns nothing (void).
   */
  public log(...msg: any[]): void {
    console.log(...msg);
  }

  /**
   * @summary Log err msg to console.
   * @description Logs an error message to the console.
   * @param msg The error message to log.
   * @returns nothing (void).
   */
  public error(...msg: any[]): void {
    console.error(...msg);
  }

  /**
   * @summary Log warning to console.
   * @description Logs a warning to the console.
   * @param msg The warning to log.
   * @returns nothing (void).
   */
  public warn(...msg: any[]): void {
    console.warn(...msg);
  }

  /**
   * @summary Log info to console.
   * @description Logs an information message to the console.
   * @param msg The info msg to log.
   * @returns nothing (void).
   */
  public info(...msg: any[]): void {
    console.info(...msg);
  }

  /**
   * @summary Clear console.
   * @description Clears the console.
   * @returns nothing (void).
   */
  public clear(): void {
    console.clear();
  }
}
