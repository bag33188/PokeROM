import { AfterContentInit, Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {
  faExclamationTriangle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import sanitizeXSS from '../../../helpers/sanitize-xss';
import removeStringChars from '../../../helpers/remove-string-chars';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, AfterContentInit {
  public user: User;
  private userId: string;
  public updateFail: boolean = false;
  public ready: boolean = false;
  public pwFocused: boolean = false;
  public errLoadingUsr: boolean = false;
  public faExclamationTriangle: IconDefinition;
  public userExists: boolean = false;
  public isErrorDeleting: boolean;
  public firedOff: boolean;

  constructor(private userService: UserService, private router: Router) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStringChars = removeStringChars;
  }

  ngOnInit(): void {
    this.firedOff = false;
    this.isErrorDeleting = false;
    const key: string = 'id';
    if (!localStorage.getItem('user')) {
      this.errLoadingUsr = true;
    } else {
      this.userId = JSON.parse(localStorage.getItem('user'))[key];
      this.retrieveUserData();
    }
    this.faExclamationTriangle = faExclamationTriangle;
  }

  ngAfterContentInit(): void {
    window.scrollTo(0, 0);
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
    this.firedOff = true;
    this.ready = false;
    const keys: string[] = ['error', 'message'];
    if (!this.user.name || this.user.name === '') {
      delete this.user.name;
    }
    if (this.user.username && this.user.password) {
      if (this.user.username.length > 0 && this.user.password.length > 0) {
        this.userService.updateUser(this.userId, this.user).subscribe(
          (): void => {
            this.ready = true;
            this.userExists = false;
            AuthService.logout();
            this.router.navigate(['/', 'home']);
          },
          (err: any): never => {
            this.ready = true;
            this.updateFail = true;
            if (
              err[keys[0]][keys[1]] ===
              'A user with that username already exists.'
            ) {
              this.userExists = true;
            }
            throw err;
          }
        );
      }
    } else {
      if (
        (this.user.username || this.user.password || this.user.name) &&
        (this.user.username.length > 0 ||
          this.user.password.length > 0 ||
          this.user.name.length > 0)
      ) {
        if (!this.user.username || this.user.username === '') {
          delete this.user.username;
        }
        if (!this.user.password || this.user.password === '') {
          delete this.user.password;
        }
        this.userService.patchUser(this.userId, this.user).subscribe(
          (): void => {
            this.ready = true;
            this.userExists = false;
            AuthService.logout();
            this.router.navigate(['/', 'home']);
          },
          (err: any): never => {
            this.ready = true;
            this.firedOff = false;
            this.updateFail = true;
            if (
              err[keys[0]][keys[1]] ===
              'A user with that username already exists.'
            ) {
              this.userExists = true;
            }
            throw err;
          }
        );
      }
    }
  }

  public sanitizeData(): void {
    if (this.user.name) {
      this.user.name = this.user.name.sanitizeXSS(true).removeStringChars();
    }
    if (this.user.username) {
      this.user.username = this.user.username
        .sanitizeXSS(false)
        .removeStringChars();
    }
    if (this.user.password) {
      this.user.password = this.user.password
        .sanitizeXSS(false)
        .removeStringChars();
    }
  }

  public changePwInputType(): string {
    return this.pwFocused ? 'text' : 'password';
  }

  public deletionError(isError: boolean): void {
    this.isErrorDeleting = isError;
  }
}
