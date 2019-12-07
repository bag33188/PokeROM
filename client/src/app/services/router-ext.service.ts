import { Injectable } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterExtService {
  private previousUrl: string;
  private currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe((event: RouterEvent): void => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  public getPreviousUrl(): string {
    return this.previousUrl;
  }
}
