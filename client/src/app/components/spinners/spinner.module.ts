import { NgModule } from '@angular/core';
import { GifSpinnerComponent } from './gif-spinner/gif-spinner.component';
import { BootstrapSpinnerComponent } from './bootstrap-spinner/bootstrap-spinner.component';

@NgModule({
  declarations: [GifSpinnerComponent, BootstrapSpinnerComponent],
  imports: [],
  exports: [BootstrapSpinnerComponent, GifSpinnerComponent],
  providers: []
})
export class SpinnerModule {}
