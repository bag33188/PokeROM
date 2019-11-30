import { Route, RouterModule } from '@angular/router';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { NgModule } from '@angular/core';
import { RatingsComponent } from './ratings.component';

const routes: Route[] = [
  { path: '', component: RatingsComponent, canActivate: [IsSecureGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingsRoutingModule {}
