import { Route, RouterModule } from '@angular/router';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';

const routes: Route[] = [
  {
    path: '',
    component: RegisterComponent,
    canActivate: [IsSecureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
