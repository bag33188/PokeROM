import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchJsonPipe } from './fetch-json.pipe';
import { DefaultImagePipe } from './default-image.pipe';
import { RomanNumeralPipe } from './roman-numeral.pipe';

@NgModule({
  declarations: [FetchJsonPipe, DefaultImagePipe, RomanNumeralPipe],
  imports: [CommonModule],
  exports: [FetchJsonPipe, DefaultImagePipe, RomanNumeralPipe]
})
export class PipesModule {}
