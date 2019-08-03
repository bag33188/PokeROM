import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import User from '../../../models/User';
import sanitizeXSS from '../../../sanitation/sanitizeXSS';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFail: string;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(100)
    ]),
    email: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.email,
      Validators.required
    ]),
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

  constructor(private authService: AuthService, private router: Router) {
    String.prototype.sanitizeXSS = sanitizeXSS;
  }

  ngOnInit() {
    if (!this.authService.loggedOut()) {
      this.authService.logout();
    }
  }

  register(): void {
    const user: User = {
      name: this.Name.value,
      email: this.Email.value,
      username: this.Username.value,
      password: this.Password.value
    };
    this.authService.registerUser(user).subscribe(
      (data: { success: boolean; message: string }): void => {
        if (data.success) {
          this.router.navigate(['/', 'login']);
          this.registerFail = '';
        } else {
          this.registerFail = 'Incorrect Registration';
        }
      },
      (err: any): never => {
        const keys: string[] = ['error', 'message'];
        if (
          err[keys[0]][keys[1]] === 'User with email already registered.' ||
          err[keys[0]][keys[1]] === 'User with username already exists.'
        ) {
          this.registerFail = 'User already exists';
        } else {
          this.registerFail = 'Incorrect Registration';
        }
        throw err;
      }
    );
  }

  sanitizeData(): void {
    this.Name.setValue(this.Name.value.sanitizeXSS(true));
    this.Email.setValue(this.Email.value.sanitizeXSS(false));
    this.Username.setValue(this.Username.value.sanitizeXSS(true));
    this.Password.setValue(this.Password.value.sanitizeXSS(false));
  }
}
