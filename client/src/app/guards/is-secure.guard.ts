import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsSecureGuard implements CanActivate {
  constructor() {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!isDevMode() && window.location.protocol !== 'https:') {
      window.location.href = `https:${window.location.href.substring(
        window.location.protocol.length
      )}`;
      if (window.location.hostname.indexOf('www') === 0) {
        window.location.href = window.location.href.replace('www.', '');
      }
      return false;
    } else {
      return true;
    }
  }
}
