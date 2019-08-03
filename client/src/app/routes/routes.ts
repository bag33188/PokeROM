import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { RomsComponent } from '../components/pages/roms/roms.component';
import { RomInfoComponent } from '../components/pages/rom-info/rom-info.component';
import { FaqComponent } from '../components/pages/faq/faq.component';
import { NaturesComponent } from '../components/pages/natures/natures.component';
import { DocsComponent } from '../components/pages/docs/docs.component';
import { RatingsComponent } from '../components/pages/ratings/ratings.component';
import { IsSecureGuard } from '../guards/is-secure.guard';
import { RegisterComponent } from '../components/pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    canActivate: [IsSecureGuard]
  },
  { path: 'home', component: HomeComponent, canActivate: [IsSecureGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsSecureGuard] },
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
  { path: 'faq', component: FaqComponent, canActivate: [IsSecureGuard] },
  {
    path: 'natures',
    component: NaturesComponent,
    canActivate: [IsSecureGuard]
  },
  {
    path: 'ratings',
    component: RatingsComponent,
    canActivate: [IsSecureGuard]
  },
  { path: 'docs', component: DocsComponent, canActivate: [IsSecureGuard] },
  { path: '404', component: NotFoundComponent, canActivate: [IsSecureGuard] },
  { path: '**', component: NotFoundComponent, canActivate: [IsSecureGuard] }
  // { path: '**', redirectTo: '/404', canActivate: [IsSecureGuard] },
  // { path: '404', component: NotFoundComponent, canActivate: [IsSecureGuard] }
];
