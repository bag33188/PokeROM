import { Injectable } from '@angular/core';

@Injectable()
export class UnitConversionService {
  constructor() {}

  public static convertRomSize(romSize: number): [number, string] {
    if (romSize > 1024 && romSize < 1000000) {
      return [parseFloat((romSize / 1000).toFixed(2)), 'MB'];
    } else if (romSize >= 1000000) {
      return [parseFloat((romSize / 1000000).toFixed(2)), 'GB'];
    } else {
      return [romSize, 'KB'];
    }
  }

  public static convertSecondsToMilliseconds(seconds: number): number {
    return seconds * 1000;
  }
}
