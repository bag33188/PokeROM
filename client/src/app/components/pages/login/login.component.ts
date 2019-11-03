import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { LoggedUser } from '../../../models/LoggedUser';
import { RegisteredUser } from '../../../models/RegisteredUser';
import sanitizeXSS from '../../../helpers/sanitize-xss';
import removeStringChars from '../../../helpers/remove-string-chars';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading: boolean;
  public loginFail: string;
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(22)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(256)
    ])
  });
  public firedOff: boolean;

  get Username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get Password(): AbstractControl {
    return this.loginForm.get('password');
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStringChars = removeStringChars;
  }

  ngOnInit(): void {
    this.firedOff = false;
    this.loading = false;
    setTimeout((): void => AuthService.logout(), 88);
  }

  public login(): void {
    this.firedOff = true;
    this.loading = true;
    const user: LoggedUser = {
      username: this.Username.value,
      password: this.Password.value
    };
    this.authService.authenticateUser(user).subscribe(
      (data: RegisteredUser): void => {
        if (data.success) {
          AuthService.storeData(data.token, data.user);
          this.loading = false;
          const returnUrl: string = this.route.snapshot.queryParamMap.get(
            'returnUrl'
          );
          this.router.navigate([returnUrl || '/roms']);
          this.loginFail = '';
        } else {
          this.loading = false;
          this.loginFail = 'Incorrect Login';
        }
      },
      (err: any): never => {
        this.loading = false;
        this.firedOff = false;
        const key: string = 'status';
        if (err[key] === 404) {
          this.loginFail = 'User does not exist';
        } else {
          this.loginFail =
            'Oops, there was a problem while trying to log you in. Please try again later.';
        }
        throw err;
      }
    );
  }

  public sanitizeData(): void {
    this.Username.setValue(
      this.Username.value.sanitizeXSS(true).removeStringChars()
    );
    this.Password.setValue(this.Password.value.sanitizeXSS(false));
  }
}
