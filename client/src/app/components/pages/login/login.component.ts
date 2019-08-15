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
import removeStrings from '../../../helpers/remove-strings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFail: string;
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(22)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(256)
    ])
  });

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
    String.prototype.removeStrings = removeStrings;
  }

  ngOnInit(): void {
    setTimeout((): void => AuthService.logout(), 88);
  }

  public login(): void {
    const user: LoggedUser = {
      username: this.Username.value,
      password: this.Password.value
    };
    this.authService.authenticateUser(user).subscribe(
      (data: RegisteredUser): void => {
        if (data.success) {
          AuthService.storeData(data.token, data.user);
          const returnUrl: string = this.route.snapshot.queryParamMap.get(
            'returnUrl'
          );
          this.router.navigate([returnUrl || '/roms']);
          this.loginFail = '';
        } else {
          this.loginFail = 'Incorrect Login';
        }
      },
      (err: any): never => {
        const key: string = 'status';
        if (err[key] === 404) {
          this.loginFail = 'User does not exist';
        } else {
          this.loginFail = 'Incorrect Login';
        }
        throw err;
      }
    );
  }

  public sanitizeData(): void {
    this.Username.setValue(
      this.Username.value.sanitizeXSS(true).removeStrings(false)
    );
    this.Password.setValue(this.Password.value.sanitizeXSS(false));
  }
}
