import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IsSecureGuard } from './guards/is-secure.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'rate',
    loadChildren: () =>
      import('./components/ratings/ratings.module').then(
        mod => mod.RatingsModule
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'roms',
    loadChildren: () =>
      import('./components/roms/roms.module').then(mod => mod.RomsModule)
  },
  {
    path: 'natures',
    loadChildren: () =>
      import('./components/natures/natures.module').then(
        mod => mod.NaturesModule
      )
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./components/faq/faq.module').then(mod => mod.FaqModule)
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./components/account/account.module').then(
        mod => mod.AccountModule
      )
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register.module').then(
        mod => mod.RegisterModule
      )
  },
  { path: '**', redirectTo: '/not_found', canActivate: [IsSecureGuard] },
  {
    path: 'not_found',
    component: NotFoundComponent,
    canActivate: [IsSecureGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
