import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsSecureGuard } from '../../guards/is-secure.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RomsComponent } from './roms/roms.component';
import { AuthGuard } from '../../guards/auth.guard';
import { RomInfoComponent } from './rom-info/rom-info.component';
import { FaqComponent } from './faq/faq.component';
import { NaturesComponent } from './natures/natures.component';
import { RatingsComponent } from './ratings/ratings.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [IsSecureGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsSecureGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsSecureGuard]
  },
  {
    path: 'roms',
    component: RomsComponent,
    canActivate: [AuthGuard, IsSecureGuard]
  },
  {
    path: 'roms/info/:id',
    component: RomInfoComponent,
    canActivate: [AuthGuard, IsSecureGuard]
  },
  {
    path: 'faq',
    component: FaqComponent,
    canActivate: [IsSecureGuard]
  },
  {
    path: 'natures',
    component: NaturesComponent,
    canActivate: [IsSecureGuard]
  },
  {
    path: 'rate',
    component: RatingsComponent,
    canActivate: [IsSecureGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard, IsSecureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
