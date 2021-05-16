import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanNumeral'
})
export class RomanNumeralPipe implements PipeTransform {
  constructor() {}
  public transform(value: number): string | number {
    let num: number = value;
    if (isNaN(num)) {
      return NaN;
    } else {
      const key: { [index: string]: number } = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      let roman: string = '';

      for (const i of Object.keys(key)) {
        const q: number = Math.floor(num / key[i]);
        num -= q * key[i];
        roman += i.repeat(q);
      }

      return roman;
    }
  }
}
