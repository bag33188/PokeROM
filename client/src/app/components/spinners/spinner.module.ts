import { NgModule } from '@angular/core';
import { GifSpinnerComponent } from './gif-spinner/gif-spinner.component';
import { BootstrapSpinnerComponent } from './bootstrap-spinner/bootstrap-spinner.component';
import { CommonModule } from '@angular/common';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [GifSpinnerComponent, BootstrapSpinnerComponent],
  imports: [CommonModule, PipesModule],
  exports: [BootstrapSpinnerComponent, GifSpinnerComponent]
})
export class SpinnerModule {}
