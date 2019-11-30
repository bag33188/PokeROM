import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';
import { IsSecureGuard } from '../guards/is-secure.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
    canActivate: [IsSecureGuard]
  },
  { path: '**', redirectTo: '/not_found', canActivate: [IsSecureGuard] },
  {
    path: 'not_found',
    component: NotFoundComponent,
    canActivate: [IsSecureGuard]
  }
];
