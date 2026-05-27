import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { UserAuth } from '../../services/user-auth';
import { NgIf } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  showPassword = false;
  errorMessage = '';

  constructor(
    private user: User,
    private userAuth: UserAuth,
    private router: Router
  ) {}

  togglePwd() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.user.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.userAuth.setToken(res.jwtToken || res.token || res);
        this.router.navigate(['/halls']);
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      },
    });
  }
}