import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchJsonPipe } from './fetch-json.pipe';

@NgModule({
  declarations: [FetchJsonPipe],
  imports: [CommonModule],
  exports: [FetchJsonPipe]
})
export class PipesModule {}
