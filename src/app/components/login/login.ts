import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { UserAuth } from '../../services/user-auth';
import { NgIf } from '@angular/common';

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
        const token =
          res.jwtToken     ||
          res.token        ||
          res.accessToken  ||
          res.access_token ||
          res.jwt;

        if (!token) {
          this.errorMessage = 'Login failed: could not read token from server response.';
          return;
        }

        this.userAuth.setToken(token);

        if (res.roles) {
          this.userAuth.setRoles(res.roles);
        }

        this.router.navigate(['/hall-list']);
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      },
    });
  }
}