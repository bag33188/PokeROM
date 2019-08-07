import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { LoggedUser } from '../../../models/LoggedUser';
import { RegisteredUser } from '../../../models/RegisteredUser';
import '../../../sanitation/sanitizeXSS';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFail: string;
  loginForm: FormGroup = new FormGroup({
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    setTimeout((): void => this.authService.logout(), 442);
  }

  login(): void {
    const user: LoggedUser = {
      username: this.Username.value,
      password: this.Password.value
    };
    this.authService.authenticateUser(user).subscribe(
      (data: RegisteredUser): void => {
        if (data.success) {
          this.authService.storeData(data.token, data.user);
          this.router.navigate(['/', 'roms']);
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

  sanitizeData(): void {
    this.Username.setValue(this.Username.value.sanitizeXSS(true));
    this.Password.setValue(this.Password.value.sanitizeXSS(false));
  }
}
