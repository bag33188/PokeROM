import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { LoginComponent } from '../components/pages/login/login.component';
import { RomsComponent } from '../components/pages/roms/roms.component';
import { RomInfoComponent } from '../components/pages/rom-info/rom-info.component';
import { FaqComponent } from '../components/pages/faq/faq.component';
import { NaturesComponent } from '../components/pages/natures/natures.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'roms', component: RomsComponent, canActivate: [AuthGuard] },
  {
    path: 'roms/info/:id',
    component: RomInfoComponent,
    canActivate: [AuthGuard]
  },
  { path: 'faq', component: FaqComponent },
  { path: 'natures', component: NaturesComponent},
  { path: '**', component: NotFoundComponent }
  // { path: '**', redirectTo: '/404' },
  // { path: '404', component: NotFoundComponent }
];
