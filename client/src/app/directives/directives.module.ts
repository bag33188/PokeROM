import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnDirective } from './btn.directive';

@NgModule({
  declarations: [BtnDirective],
  imports: [CommonModule],
  exports: [BtnDirective]
})
export class DirectivesModule {}
