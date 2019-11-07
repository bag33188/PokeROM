import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnDirective } from './btn.directive';
import { AlertDirective } from './alert.directive';

@NgModule({
  declarations: [BtnDirective, AlertDirective],
  imports: [CommonModule],
  exports: [BtnDirective, AlertDirective]
})
export class DirectivesModule {}
