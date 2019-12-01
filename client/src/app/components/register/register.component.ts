import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  AbstractControl,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import sanitizeXSS from '../../helpers/sanitize-xss';
import removeStringChars from '../../helpers/remove-string-chars';
import { JSONObject } from '../../models/JSONObject';
import { LoggerService as logger } from '../../services/logger.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  public loading: boolean;
  public registerFail: string;
  public registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.minLength(1), Validators.maxLength(100)]],
    username: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(22)]
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(256)]
    ]
  });
  public firedOff: boolean;

  get Username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get Name(): AbstractControl {
    return this.registerForm.get('name');
  }

  get Password(): AbstractControl {
    return this.registerForm.get('password');
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStringChars = removeStringChars;
  }

  public ngOnInit(): void {
    this.loading = false;
    this.firedOff = false;
    setTimeout(AuthService.logout, 100);
  }

  public register(): void {
    this.firedOff = true;
    this.loading = true;
    const user: User = {
      name: this.Name.value,
      username: this.Username.value,
      password: this.Password.value
    };
    if (/(?:([<>/\\'"&]))/g.test(user.username)) {
      this.registerFail =
        'Username can only contain letters, numbers, or underscores.';
    } else {
      if (user.name.length < 1 || user.name === '') {
        delete user.name;
      }
      this.userService.registerUser(user).subscribe(
        (data: { success: boolean; message: string }): void => {
          if (data.success) {
            this.loading = false;
            this.router.navigate(['/', 'login']);
            this.registerFail = '';
          } else {
            this.registerFail = 'Incorrect Registration';
          }
        },
        (err: JSONObject): void => {
          this.firedOff = false;
          this.loading = false;
          const keys: string[] = ['error', 'user_exists', 'errors', 'msg'];
          if (err[keys[0]].hasOwnProperty(keys[1])) {
            if (err[keys[0]][keys[1]] === true) {
              this.registerFail = 'User with username already exists';
            } else {
              this.registerFail = 'Registration Failure';
            }
          }
          if (err[keys[0]][keys[2]]) {
            err[keys[0]][keys[2]].forEach((error: JSONObject): void => {
              if (
                error[keys[3]] ===
                'Username can only contain letters, numbers, or underscores.'
              ) {
                this.registerFail =
                  'Username can only contain letters, numbers, or underscores.';
              } else if (
                error[keys[3]] === 'Password contains invalid characters.'
              ) {
                this.registerFail = 'Password contains invalid characters.';
              } else {
                this.registerFail = 'Registration Failure';
              }
            });
          }
          logger.error(err);
        }
      );
    }
  }

  public sanitizeData(): void {
    this.Name.setValue(
      this.Name.value
        .sanitizeXSS({ replaceSpecialChars: true })
        .removeStringChars()
    );
    this.Username.setValue(
      this.Username.value
        .sanitizeXSS({ replaceSpecialChars: false })
        .removeStringChars()
    );
    this.Password.setValue(
      this.Password.value.sanitizeXSS({ replaceSpecialChars: false })
    );
  }
}