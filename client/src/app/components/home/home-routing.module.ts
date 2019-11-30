import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { HomeComponent } from './home.component';

let routes: Routes;
routes = [
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
