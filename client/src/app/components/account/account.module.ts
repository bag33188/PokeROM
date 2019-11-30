import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteUserBtnComponent } from './delete-user-btn/delete-user-btn.component';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';
import { UpdateRomsComponent } from './update-roms/update-roms.component';
import { AccountRoutingModule } from './account-routing.module';
import { UserService } from '../../services/user.service';
import { RomsService } from '../../services/roms.service';
import { SpinnerModule } from '../spinners/spinner.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AccountRoutingModule,
    SpinnerModule,
    FormsModule,
    FontAwesomeModule,
    DirectivesModule
  ],
  declarations: [
    DeleteUserBtnComponent,
    DeleteUserModalComponent,
    UpdateRomsComponent,
    AccountComponent
  ],
  providers: [UserService, RomsService]
})
export class AccountModule {}
