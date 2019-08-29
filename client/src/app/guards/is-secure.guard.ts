import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IsSecureGuard implements CanActivate {
  constructor() {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (environment.production && window.location.protocol !== 'https:') {
      window.location.href = `https:${window.location.href.substring(
        window.location.protocol.length
      )}`;
      return false;
    } else {
      return true;
    }
  }
}
