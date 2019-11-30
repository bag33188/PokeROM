import { RouterModule, Routes } from '@angular/router';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { NgModule } from '@angular/core';
import { NaturesComponent } from './natures.component';

const routes: Routes = [
  { path: '', component: NaturesComponent, canActivate: [IsSecureGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaturesRoutingModule {}
