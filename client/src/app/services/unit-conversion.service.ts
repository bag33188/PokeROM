import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class UnitConversionService {
  protected constructor() {}

  /**
   * @summary Convert size of ROM.
   * @description Converts the ROM size to its proper unit.
   * @param romSize The size of the ROM (in kilobytes).
   * @returns A tuple of number and string (mapped array).
   */
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
