import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { BorderSpinnerComponent } from './border-spinner.component';

@NgModule({
  declarations: [SpinnerComponent, BorderSpinnerComponent],
  imports: [],
  exports: [SpinnerComponent, BorderSpinnerComponent],
  providers: []
})
export class SpinnerModule {}
