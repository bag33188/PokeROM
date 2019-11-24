import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchJsonPipe } from './fetch-json.pipe';
import { DefaultPipe } from './default.pipe';

@NgModule({
  declarations: [FetchJsonPipe, DefaultPipe],
  imports: [CommonModule],
  exports: [FetchJsonPipe, DefaultPipe]
})
export class PipesModule {}
