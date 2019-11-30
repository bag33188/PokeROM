import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { RomsComponent } from '../components/pages/roms/roms.component';
import { RomInfoComponent } from '../components/pages/rom-info/rom-info.component';
import { FaqComponent } from '../components/pages/faq/faq.component';
import { NaturesComponent } from '../components/pages/natures/natures.component';
import { RatingsComponent } from '../components/pages/ratings/ratings.component';
import { IsSecureGuard } from '../guards/is-secure.guard';
import { RegisterComponent } from '../components/pages/register/register.component';
import { AccountComponent } from '../components/pages/account/account.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    canActivate: [IsSecureGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsSecureGuard],
    loadChildren: 'app/components/pages/pages.module#PagesModule'
  },
  { path: '**', redirectTo: '/not_found', canActivate: [IsSecureGuard] },
  {
    path: 'not_found',
    component: NotFoundComponent,
    canActivate: [IsSecureGuard]
  }
];
