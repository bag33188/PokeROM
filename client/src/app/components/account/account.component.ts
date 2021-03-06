import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService, lengths, Lengths } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {
  faExclamationTriangle,
  faInfoCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import sanitizeXSS from '../../helpers/sanitize-xss';
import removeStringChars from '../../helpers/remove-string-chars';
import { JSONObject } from '../../models/JSONObject';
import { CookiesService as cookies } from '../../services/cookies.service';
import { Observable, Subscription } from 'rxjs';
import { LoggerService as logger } from '../../services/logger.service';
import { LocalStorageService as localState } from '../../services/local-storage.service';
import { SessionStorageService as sessionState } from '../../services/session-storage.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  public user: User;
  private userId: string;
  public updateFail: boolean;
  public ready: boolean;
  public pwFocused: boolean;
  public errLoadingUsr: boolean;
  public faExclamationTriangle: IconDefinition;
  public userExists: boolean;
  public isErrorDeleting: boolean;
  public firedOff: boolean;
  public noticeClosed: boolean;
  public warningClosed: boolean;
  private userObs$: Observable<User>;
  private userSub: Subscription;
  public lengths: Lengths;
  public faInfoCircle: IconDefinition;

  constructor(private userService: UserService, private router: Router) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStringChars = removeStringChars;
  }

  public ngOnInit(): void {
    this.lengths = lengths;
    this.userExists = false;
    this.updateFail = false;
    this.pwFocused = false;
    this.ready = false;
    this.firedOff = false;
    this.errLoadingUsr = false;
    this.isErrorDeleting = false;
    this.faExclamationTriangle = faExclamationTriangle;
    this.faInfoCircle = faInfoCircle;
    if (!cookies.getCookie('user')) {
      this.errLoadingUsr = true;
    } else {
      const key: string = 'id';
      this.userId = JSON.parse(cookies.getCookie('user'))[key];
      this.retrieveUserData(this.userId);
    }
    if (!localState.getState<boolean>('notice_closed')) {
      localState.setState<boolean>('notice_closed', false);
    }
    if (!sessionState.getState<boolean>('warning_closed')) {
      sessionState.setState<boolean>('warning_closed', false);
    }
    this.noticeClosed = localState.getState<boolean>('notice_closed');
    this.warningClosed = sessionState.getState<boolean>('warning_closed');
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

  public storeAlertState(alertName: string): void {
    switch (alertName) {
      case 'notice':
        localState.setState<boolean>('notice_closed', true);
        break;
      case 'warning':
        sessionState.setState<boolean>('warning_closed', true);
        break;
      default:
        logger.error('Unknown alert name.');
        break;
    }
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
