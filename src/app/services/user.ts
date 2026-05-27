import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from './user-auth';

@Injectable({
  providedIn: 'root',
})
export class User {
  BASE_URL = 'http://203.94.72.18/trainee/api';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private httpClient: HttpClient,
    private userAuth: UserAuth
  ) {}

  public login(loginData: any) {
    return this.httpClient.post(this.BASE_URL + '/auth/signin', loginData, {
      headers: this.requestHeader,
    });
  }

  public roleEqual(allowRoles: string[]): boolean {
    const userRoles = this.userAuth.getRoles();
    if (userRoles != null && userRoles.length > 0) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowRoles.length; j++) {
          if (userRoles[i].roleName === allowRoles[j]) return true;
        }
      }
    }
    return false;
  }
}