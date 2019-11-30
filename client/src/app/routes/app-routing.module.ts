import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { routes } from './routes';

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
