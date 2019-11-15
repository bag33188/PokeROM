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
  public static log = (...msg: any[]): void => console.log(...msg);

  /**
   * @summary Log err msg to console.
   * @description Logs an error message to the console.
   * @param msg The error message to log.
   * @returns nothing (void).
   */
  public static error = (...msg: any[]): void => console.error(...msg);

  /**
   * @summary Log warning to console.
   * @description Logs a warning to the console.
   * @param msg The warning to log.
   * @returns nothing (void).
   */
  public static warn = (...msg: any[]): void => console.warn(...msg);

  /**
   * @summary Log info to console.
   * @description Logs an information message to the console.
   * @param msg The info msg to log.
   * @returns nothing (void).
   */
  public static info = (...msg: any[]): void => console.info(...msg);

  public static table = (...data: any): void => console.table(data);

  public static trace = (): void => console.trace();

  public static count = (label?: string): void => console.count(label);

  public static assert = (exp: boolean, msg: string): void =>
    // tslint:disable-next-line:semicolon
    console.assert(exp, msg);

  public static time = (label?: string): void => console.time(label);

  public static timeEnd = (label?: string): void => console.timeEnd(label);

  public static group = (label?: string): void => console.group(label);

  public static groupEnd = (): void => console.group();

  public static groupCollapsed = (label?: string): void =>
    // tslint:disable-next-line:semicolon
    console.groupCollapsed(label);

  /**
   * @summary Clear console.
   * @description Clears the console.
   * @returns nothing (void).
   */
  public static clear = (): void => console.clear();
}
