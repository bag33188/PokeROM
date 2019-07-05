import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeConversionService {
  constructor() {}

  public convertSize(romSize: number): [number, string] {
    if (romSize > 1024 && romSize < 1000000) {
      return [parseFloat((romSize / 1000).toFixed(2)), 'MB'];
    } else if (romSize >= 1000000) {
      return [parseFloat((romSize / 1000000).toFixed(2)), 'GB'];
    } else {
      return [romSize, 'KB'];
    }
  }
}
