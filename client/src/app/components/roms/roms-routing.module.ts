import { RouterModule, Routes } from '@angular/router';
import { RomsComponent } from './roms.component';
import { AuthGuard } from '../../guards/auth.guard';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { RomInfoComponent } from './rom-info/rom-info.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RomsComponent,
    canActivate: [AuthGuard, IsSecureGuard]
  },
  {
    path: 'info/:id',
    component: RomInfoComponent,
    canActivate: [AuthGuard, IsSecureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RomsRoutingModule {}
