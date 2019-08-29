import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import sanitizeXSS from '../../../helpers/sanitize-xss';
import removeStrings from '../../../helpers/remove-strings';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public user: User;
  private userId: string;
  public updateFail: string;
  public ready: boolean = false;
  public pwFocused: boolean = false;
  public errLoadingUsr: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStrings = removeStrings;
  }

  ngOnInit(): void {
    const key: string = 'id';
    this.userId = JSON.parse(localStorage.getItem('user'))[key];
    this.retrieveUserData();
  }

  public retrieveUserData(): void {
    this.userService.getUser(this.userId).subscribe(
      (res: User): void => {
        if (!res.name || res.name === '') {
          res.name = '';
        }
        res.password = '';
        this.user = res;
        this.ready = true;
      },
      (err: any): never => {
        this.errLoadingUsr = true;
        this.ready = true;
        throw err;
      }
    );
  }

  public save(): void {
    if (!this.user.name || this.user.name === '') {
      delete this.user.name;
    }
    this.userService.updateUser(this.userId, this.user).subscribe(
      (): void => {
        AuthService.logout();
        this.router.navigate(['/', 'home']);
      },
      (err: any): never => {
        this.updateFail =
          'There was an error while trying to update your account.';
        throw err;
      }
    );
  }

  public sanitizeData(): void {
    if (this.user.name) {
      this.user.name = this.user.name.sanitizeXSS(true).removeStrings(false);
    }
    this.user.username = this.user.username
      .sanitizeXSS(false)
      .removeStrings(false);
    this.user.password = this.user.password
      .sanitizeXSS(false)
      .removeStrings(false);
  }

  public changePwInputType(): string {
    return this.pwFocused ? 'text' : 'password';
  }
}
