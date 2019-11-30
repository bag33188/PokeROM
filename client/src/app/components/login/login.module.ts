import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { DirectivesModule } from '../../directives/directives.module';
import { SpinnerModule } from '../spinners/spinner.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    DirectivesModule,
    SpinnerModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers: [UserService, AuthService]
})
export class LoginModule {}
