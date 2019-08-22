import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  AbstractControl,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user.service';
import sanitizeXSS from '../../../helpers/sanitize-xss';
import removeStrings from '../../../helpers/remove-strings';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterContentInit {
  public registerFail: string;
  public registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.minLength(1), Validators.maxLength(100)]],
    email: [
      '',
      [Validators.email, Validators.minLength(4), Validators.maxLength(55)]
    ],
    username: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(22)]
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(256)]
    ]
  });

  get Username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get Name(): AbstractControl {
    return this.registerForm.get('name');
  }

  get Email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get Password(): AbstractControl {
    return this.registerForm.get('password');
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    String.prototype.sanitizeXSS = sanitizeXSS;
    String.prototype.removeStrings = removeStrings;
  }

  ngOnInit(): void {
    setTimeout((): void => AuthService.logout(), 100);
  }

  ngAfterContentInit(): void {
    window.scrollTo(0, 0);
  }

  public register(): void {
    const user: User = {
      name: this.Name.value,
      email: this.Email.value,
      username: this.Username.value,
      password: this.Password.value
    };
    if (/(?:([<>/\\'"&]))/g.test(user.username)) {
      this.registerFail =
        'Username can only contain letters, numbers, or underscores.';
    } else {
      this.userService.registerUser(user).subscribe(
        (data: { success: boolean; message: string }): void => {
          if (data.success) {
            this.router.navigate(['/', 'login']);
            this.registerFail = '';
          } else {
            this.registerFail = 'Incorrect Registration';
          }
        },
        (err: any): never => {
          const keys: string[] = ['error', 'message', 'errors', 'msg'];
          if (err[keys[0]][keys[1]]) {
            switch (err[keys[0]][keys[1]]) {
              case 'User with email already registered.':
                this.registerFail = 'User with email already exists';
                break;
              case 'User with username already exists.':
                this.registerFail = 'User with username already exists';
                break;
              default:
                this.registerFail = 'Registration Failure';
                break;
            }
          }
          if (err[keys[0]][keys[2]]) {
            err[keys[0]][keys[2]].forEach((error: any): void => {
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
          throw err;
        }
      );
    }
  }

  public sanitizeData(): void {
    this.Name.setValue(this.Name.value.sanitizeXSS(true).removeStrings(false));
    this.Email.setValue(
      this.Email.value.sanitizeXSS(false).removeStrings(false)
    );
    this.Username.setValue(
      this.Username.value.sanitizeXSS(false).removeStrings(false)
    );
    this.Password.setValue(this.Password.value.sanitizeXSS(false));
  }
}
