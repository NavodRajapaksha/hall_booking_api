import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth } from '../../services/user-auth';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(
    private userAuth: UserAuth,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return !!this.userAuth.getToken();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}