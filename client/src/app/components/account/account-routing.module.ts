import { Route, Router, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AuthGuard } from '../../guards/auth.guard';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [AuthGuard, IsSecureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
