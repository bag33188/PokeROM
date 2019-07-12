import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}

  public log(msg: any): void {
    console.log(msg);
  }
  public error(msg: any): void {
    console.error(msg);
  }
  public warn(msg: any): void {
    console.warn(msg);
  }
}
