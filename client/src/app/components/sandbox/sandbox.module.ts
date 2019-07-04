import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhoneNumberValidatorComponent } from './phone-number-validator/phone-number-validator.component';

@NgModule({
  declarations: [PhoneNumberValidatorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PhoneNumberValidatorComponent
  ]
})
export class SandboxModule { }
