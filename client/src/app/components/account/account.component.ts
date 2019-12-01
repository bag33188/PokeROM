import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  faExclamationTriangle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import sanitizeXSS from '../../helpers/sanitize-xss';
import removeStringChars from '../../helpers/remove-string-chars';
import { JSONObject } from '../../models/JSONObject';
import { CookiesService } from '../../services/cookies.service';
import { Observable, Subscription } from 'rxjs';
import { LoggerService as logger } from '../../services/logger.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
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
  public noticeClosed: boolean;
  private userObs$: Observable<User>;
  private userSub: Subscription;

  constructor(private userService: UserService, private router: Router) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStringChars = removeStringChars;
  }

  public ngOnInit(): void {
    this.firedOff = false;
    this.isErrorDeleting = false;
    this.faExclamationTriangle = faExclamationTriangle;
    const key: string = 'id';
    if (!CookiesService.getCookie('user')) {
      this.errLoadingUsr = true;
    } else {
      this.userId = JSON.parse(CookiesService.getCookie('user'))[key];
      this.retrieveUserData(this.userId);
    }
    if (!localStorage.getItem('noticeClosed')) {
      localStorage.setItem('noticeClosed', 'false');
    }
    this.noticeClosed = JSON.parse(localStorage.getItem('noticeClosed'));
  }

  public ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  public retrieveUserData(id: string): void {
    this.userObs$ = this.userService.getUser(id);
    this.userSub = this.userObs$.subscribe(
      (res: User): void => {
        if (!res.name || res.name === '') {
          res.name = '';
        }
        res.password = '';
        this.user = res;
        this.ready = true;
      },
      (err: JSONObject): void => {
        this.errLoadingUsr = true;
        this.ready = true;
        logger.error(err);
      }
    );
  }

  public save(): void {
    this.firedOff = true;
    this.ready = false;
    const keys: string[] = ['error', 'user_exists'];
    if (!this.user.name || this.user.name === '') {
      this.user.name = null;
    }
    this.updateUser(this.userId, this.user, keys);
  }

  public sanitizeData(): void {
    if (this.user.name) {
      this.user.name = this.user.name
        .sanitizeXSS({ replaceSpecialChars: true })
        .removeStringChars();
    }
    if (this.user.username) {
      this.user.username = this.user.username
        .sanitizeXSS({ replaceSpecialChars: false })
        .removeStringChars();
    }
    if (this.user.password) {
      this.user.password = this.user.password
        .sanitizeXSS({ replaceSpecialChars: false })
        .removeStringChars();
    }
  }

  public changePwInputType(): string {
    return this.pwFocused ? 'text' : 'password';
  }

  public deletionError(isError: boolean): void {
    this.isErrorDeleting = isError;
  }

  public storeAlertState(): void {
    localStorage.setItem('noticeClosed', 'true');
  }

  private updateUser(userId: string, user: User, keys: string[]): void {
    this.userService.updateUser(userId, user).subscribe(
      (): void => {
        this.ready = true;
        this.userExists = false;
        AuthService.logout();
        this.router.navigate(['/', 'home']);
      },
      (err: JSONObject): void => {
        this.ready = true;
        this.updateFail = true;
        this.firedOff = false;
        // check for existing username
        if (err[keys[0]][keys[1]] === true) {
          this.userExists = true;
        }
        logger.error(err);
      }
    );
  }
}
