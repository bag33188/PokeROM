import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IsSecureGuard } from './guards/is-secure.guard';
import { HomeModule } from './components/home/home.module';
import { RomsModule } from './components/roms/roms.module';
import { NaturesModule } from './components/natures/natures.module';
import { FaqModule } from './components/faq/faq.module';
import { RatingsModule } from './components/ratings/ratings.module';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { AccountModule } from './components/account/account.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: (): Promise<typeof HomeModule> =>
      import('./components/home/home.module').then(
        (
          mod: typeof import('./components/home/home.module')
        ): typeof HomeModule => mod.HomeModule
      )
  },
  {
    path: 'roms',
    loadChildren: (): Promise<typeof RomsModule> =>
      import('./components/roms/roms.module').then(
        (
          mod: typeof import('./components/roms/roms.module')
        ): typeof RomsModule => mod.RomsModule
      )
  },
  {
    path: 'natures',
    loadChildren: (): Promise<typeof NaturesModule> =>
      import('./components/natures/natures.module').then(
        (
          mod: typeof import('./components/natures/natures.module')
        ): typeof NaturesModule => mod.NaturesModule
      )
  },
  {
    path: 'faq',
    loadChildren: (): Promise<typeof FaqModule> =>
      import('./components/faq/faq.module').then(
        (mod: typeof import('./components/faq/faq.module')): typeof FaqModule =>
          mod.FaqModule
      )
  },
  {
    path: 'rate',
    loadChildren: (): Promise<typeof RatingsModule> =>
      import('./components/ratings/ratings.module').then(
        (
          mod: typeof import('./components/ratings/ratings.module')
        ): typeof RatingsModule => mod.RatingsModule
      )
  },
  {
    path: 'login',
    loadChildren: (): Promise<typeof LoginModule> =>
      import('./components/login/login.module').then(
        (
          mod: typeof import('./components/login/login.module')
        ): typeof LoginModule => mod.LoginModule
      )
  },
  {
    path: 'register',
    loadChildren: (): Promise<typeof RegisterModule> =>
      import('./components/register/register.module').then(
        (
          mod: typeof import('./components/register/register.module')
        ): typeof RegisterModule => mod.RegisterModule
      )
  },
  {
    path: 'account',
    loadChildren: (): Promise<typeof AccountModule> =>
      import('./components/account/account.module').then(
        (
          mod: typeof import('./components/account/account.module')
        ): typeof AccountModule => mod.AccountModule
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
