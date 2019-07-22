import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeConversionService {
  constructor() {
  }

  /**
   * @summary Convert size of ROM.
   * @description Converts the ROM size to its proper unit.
   * @param romSize The size of the ROM (in kilobytes).
   * @returns A tuple of number and string (mapped array).
   */
  public convertRomSize(romSize: number): [number, string] {
    if (romSize > 1024 && romSize < 1000000) {
      return [parseFloat((romSize / 1000).toFixed(2)), 'MB'];
    } else if (romSize >= 1000000) {
      return [parseFloat((romSize / 1000000).toFixed(2)), 'GB'];
    } else {
      return [romSize, 'KB'];
    }
  }
}
