import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { UserService } from '../../services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';
import { SpinnerModule } from '../spinners/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    DirectivesModule,
    SpinnerModule
  ],
  declarations: [RegisterComponent],
  providers: [UserService]
})
export class RegisterModule {}
