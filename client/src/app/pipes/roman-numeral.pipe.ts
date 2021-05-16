import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanNumeral'
})
export class RomanNumeralPipe implements PipeTransform {
  constructor() {}
  public transform(value: number): string | number {
    const num: number = value;
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
