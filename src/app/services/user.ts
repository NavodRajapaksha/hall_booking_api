import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from './user-auth';
import { Signup } from '../dto/signup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  BASE_URL = 'http://localhost:8080';

  requestHeader = new HttpHeaders(
    { 'No-Auth': 'True' }
  )

  constructor(
    private httpClient: HttpClient,
    private userAuth: UserAuth
  ) { }

  public login (loginData: any) {
    return this.httpClient.post(this.BASE_URL + "/authentication", loginData, { headers: this.requestHeader });
  }

  public registerNewUser(signupData: Signup):Observable<Signup> {
    return this.httpClient.post<Signup>(this.BASE_URL + "/user/register-new-user", signupData, { headers: this.requestHeader });
  }

  public roleEqual(allowRoles: string[]): boolean {
  const userRoles = this.userAuth.getRoles();

  if (userRoles != null && userRoles.length > 0) {
    for (let i = 0; i < userRoles.length; i++) {
      for (let j = 0; j < allowRoles.length; j++) {
        if (userRoles[i].roleName === allowRoles[j]) {
          return true; 
        }
      }
    }
  }
  return false;
}
}
 