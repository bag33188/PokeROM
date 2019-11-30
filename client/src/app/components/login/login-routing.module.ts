import { Route, RouterModule } from '@angular/router';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

const routes: Route[] = [
  { path: '', component: LoginComponent, canActivate: [IsSecureGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
