import { NgModule } from '@angular/core';
import { GifSpinnerComponent } from './gif-spinner/gif-spinner.component';
import { BootstrapSpinnerComponent } from './bootstrap-spinner/bootstrap-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GifSpinnerComponent, BootstrapSpinnerComponent],
  imports: [CommonModule],
  exports: [BootstrapSpinnerComponent, GifSpinnerComponent],
  providers: []
})
export class SpinnerModule {}
