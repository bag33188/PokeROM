import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchJsonPipe } from './fetch-json.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';

@NgModule({
  declarations: [FetchJsonPipe, ReverseStringPipe],
  imports: [CommonModule],
  exports: [FetchJsonPipe, ReverseStringPipe]
})
export class PipesModule {}
