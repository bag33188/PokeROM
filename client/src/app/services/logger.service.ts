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
   * @returns Nothing (void).
   */
  public static log = (...msg: any[]): void => console.log(...msg);

  /**
   * @summary Log err msg to console.
   * @description Logs an error message to the console.
   * @param msg The error message to log.
   * @returns Nothing (void).
   */
  public static error = (...msg: any[]): void => console.error(...msg);

  /**
   * @summary Log warning to console.
   * @description Logs a warning to the console.
   * @param msg The warning to log.
   * @returns Nothing (void).
   */
  public static warn = (...msg: any[]): void => console.warn(...msg);

  /**
   * @summary Log info to console.
   * @description Logs an information message to the console.
   * @param msg The info msg to log.
   * @returns Nothing (void).
   */
  public static info = (...msg: any[]): void => console.info(...msg);

  /**
   * @summary Log table data to console.
   * @description Logs table data in a table format to the console.
   * @param data The table data to log.
   * @returns Nothing (void).
   */
  public static table = (...data: any): void => console.table(data);

  /**
   * @summary Trace a stack to the console.
   * @description Outputs a stack trace to the console.
   * @returns Nothing (void).
   */
  public static trace = (): void => console.trace();

  /**
   * @summary Recursive counting.
   * @description Logs the number of times that this particular call to count() has been called.
   * @param label Optional identifier.
   * @returns Nothing (void).
   */
  public static count = (label?: string): void => console.count(label);

  /**
   * @summary Assert an expression or statement.
   * @description Writes an error message to the console if the assertion is false.
   * @param exp The expression to assert.
   * @param msg The message if false is returned.
   * @returns Nothing (void).
   */
  public static assert = (exp: boolean, msg: string): void =>
    // tslint:disable-next-line:semicolon
    console.assert(exp, msg);

  /**
   * @summary Start console timer.
   * @description Starts a timer (can track how long an operation takes).
   * @param label Optional identifier.
   * @returns Nothing (void).
   */
  public static time = (label?: string): void => console.time(label);

  /**
   * @summary End the console's timer.
   * @description Stops a timer that was previously started by console.time().
   * @param label Optional identifier.
   * @returns Nothing (void).
   */
  public static timeEnd = (label?: string): void => console.timeEnd(label);

  /**
   * @summary Create an inline console group.
   * @description Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called.
   * @param label Optional identifier.
   * @returns Nothing (void).
   */
  public static group = (label?: string): void => console.group(label);

  /**
   * @summary Ends an inline console group.
   * @description Exits the current inline group in the console.
   * @returns Nothing (void).
   */
  public static groupEnd = (): void => console.group();

  /**
   * @summary Collapse an inline console group.
   * @description Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it.
   * @param label Optional identifier.
   * @returns Nothing (void).
   */
  public static groupCollapsed = (label?: string): void =>
    // tslint:disable-next-line:semicolon
    console.groupCollapsed(label);

  /**
   * @summary Clear console.
   * @description Clears the console.
   * @returns Nothing (void).
   */
  public static clear = (): void => console.clear();
}
