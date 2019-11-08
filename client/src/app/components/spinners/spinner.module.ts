import { NgModule } from '@angular/core';
import { BorderSpinnerComponent } from './border-spinner/border-spinner.component';
import { GifSpinnerComponent } from './gif-spinner/gif-spinner.component';

@NgModule({
  declarations: [BorderSpinnerComponent, GifSpinnerComponent],
  imports: [],
  exports: [BorderSpinnerComponent, GifSpinnerComponent],
  providers: []
})
export class SpinnerModule {}
