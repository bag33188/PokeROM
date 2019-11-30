import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { RatingsComponent } from './ratings.component';

const routes: Routes = [
  { path: '', component: RatingsComponent, canActivate: [IsSecureGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingsRoutingModule {}
