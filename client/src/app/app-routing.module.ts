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
import { LoggerService as logger } from './services/logger.service';

type homeModule = typeof import('./components/home/home.module');
type romsModule = typeof import('./components/roms/roms.module');
type naturesModule = typeof import('./components/natures/natures.module');
type faqModule = typeof import('./components/faq/faq.module');
type ratingsModule = typeof import('./components/ratings/ratings.module');
type loginModule = typeof import('./components/login/login.module');
type registerModule = typeof import('./components/register/register.module');
type accountModule = typeof import('./components/account/account.module');

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: (): Promise<typeof HomeModule | void> =>
      import('./components/home/home.module')
        .then((mod: homeModule): typeof HomeModule => mod.HomeModule)
        .catch((err: object): void => logger.error(err))
  },
  {
    path: 'roms',
    loadChildren: (): Promise<typeof RomsModule | void> =>
      import('./components/roms/roms.module')
        .then((mod: romsModule): typeof RomsModule => mod.RomsModule)
        .catch((err: object): void => logger.error(err))
  },
  {
    path: 'natures',
    loadChildren: (): Promise<typeof NaturesModule | void> =>
      import('./components/natures/natures.module').then(
        (mod: naturesModule): typeof NaturesModule => mod.NaturesModule
      )
  },
  {
    path: 'faq',
    loadChildren: (): Promise<typeof FaqModule | void> =>
      import('./components/faq/faq.module')
        .then((mod: faqModule): typeof FaqModule => mod.FaqModule)
        .catch((err: object): void => logger.error(err))
  },
  {
    path: 'rate',
    loadChildren: (): Promise<typeof RatingsModule | void> =>
      import('./components/ratings/ratings.module')
        .then((mod: ratingsModule): typeof RatingsModule => mod.RatingsModule)
        .catch((err: object): void => logger.error(err))
  },
  {
    path: 'login',
    loadChildren: (): Promise<typeof LoginModule | void> =>
      import('./components/login/login.module')
        .then((mod: loginModule): typeof LoginModule => mod.LoginModule)
        .catch((err: object): void => logger.error(err))
  },
  {
    path: 'register',
    loadChildren: (): Promise<typeof RegisterModule | void> =>
      import('./components/register/register.module')
        .then(
          (mod: registerModule): typeof RegisterModule => mod.RegisterModule
        )
        .catch((err: object): void => logger.error(err))
  },
  {
    path: 'account',
    loadChildren: (): Promise<typeof AccountModule | void> =>
      import('./components/account/account.module')
        .then((mod: accountModule): typeof AccountModule => mod.AccountModule)
        .catch((err: object): void => logger.error(err))
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
      scrollPositionRestoration: 'enabled',
      useHash: false
      // preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
