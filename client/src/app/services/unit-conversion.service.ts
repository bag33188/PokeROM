import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitConversionService {
  constructor() {}

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

  public static convertIntegerToRomanNumeral(num: number): string | number {
    if (isNaN(num)) {
      return NaN;
    } else {
      const digits: string[] = String(+num).split('');
      const key: string[] = [
        '',
        'C',
        'CC',
        'CCC',
        'CD',
        'D',
        'DC',
        'DCC',
        'DCCC',
        'CM',
        '',
        'X',
        'XX',
        'XXX',
        'XL',
        'L',
        'LX',
        'LXX',
        'LXXX',
        'XC',
        '',
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX'
      ];
      let roman: string = '';
      let i: number = 3;
      while (i--) {
        roman = (key[parseInt(digits.pop(), 10) + i * 10] || '') + roman;
      }
      return Array(+digits.join('') + 1).join('M') + roman;
    }
  }
}
