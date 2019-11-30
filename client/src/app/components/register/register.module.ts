import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { UserService } from '../../services/user.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RegisterRoutingModule],
  declarations: [RegisterComponent],
  providers: [UserService]
})
export class RatingsModule {}
