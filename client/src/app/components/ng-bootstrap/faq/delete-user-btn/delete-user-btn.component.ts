import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq-delete-user-btn',
  templateUrl: './delete-user-btn.component.html',
  styleUrls: ['./delete-user-btn.component.scss']
})
export class DeleteUserBtnComponent implements OnInit, OnDestroy {
  isErrorDeleting: boolean;
  deleteUserSub: Subscription;
  constructor(
    public authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isErrorDeleting = false;
  }
  deleteCurrentUser(): void {
    const key: string = 'id';

    this.deleteUserSub = this.userService
      .deleteUser(JSON.parse(localStorage.getItem('user'))[key])
      .pipe(take(1))
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

  ngOnDestroy() {
    this.deleteUserSub.unsubscribe();
  }
}
