import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchJsonPipe } from './fetch-json.pipe';
import { DefaultImagePipe } from './default-image.pipe';

@NgModule({
  declarations: [FetchJsonPipe, DefaultImagePipe],
  imports: [CommonModule],
  exports: [FetchJsonPipe, DefaultImagePipe]
})
export class PipesModule {}
