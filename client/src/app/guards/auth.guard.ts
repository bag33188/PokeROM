import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(route, state: RouterStateSnapshot): boolean {
    if (this.authService.loggedOut()) {
      this.router.navigate(['/', 'login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    } else {
      return true;
    }
  }
}
