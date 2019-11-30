import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [IsSecureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
