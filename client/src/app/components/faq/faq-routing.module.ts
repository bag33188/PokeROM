import { Route, Router, RouterModule } from '@angular/router';
import { FaqComponent } from './faq.component';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  { path: '', component: FaqComponent, canActivate: [IsSecureGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule {}
