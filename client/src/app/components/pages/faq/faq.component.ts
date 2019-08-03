import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterContentInit {
  emulatorUrl: string;
  @ViewChild('cookies', { static: true }) cookiesElement: ElementRef;
  @ViewChild('browserCompatibility', { static: true })
  browserCompatibilityElement: ElementRef;
  isErrorDeleting: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.emulatorUrl = 'https://www.retroarch.com';
    this.isErrorDeleting = false;
  }

  ngAfterContentInit() {
    switch (this.route.snapshot.fragment) {
      case 'browser-compatibility':
        this.browserCompatibilityElement.nativeElement.scrollIntoView();
        break;
      case 'cookies':
        this.cookiesElement.nativeElement.scrollIntoView();
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  }

  deleteCurrentUser(): void {
    const key: string = 'id';
    this.authService
      .deleteUser(JSON.parse(localStorage.getItem('user'))[key])
      .subscribe(
        (): void => {
          this.isErrorDeleting = false;
          this.router.navigate(['/', 'home']);
          this.authService.logout();
        },
        (err: any): void => {
          this.isErrorDeleting = true;
          console.error(err);
        }
      );
  }
}
