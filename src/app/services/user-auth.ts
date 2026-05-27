import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {

  constructor(){}

  public setRoles(roles : []){
    localStorage.setItem('roles',JSON.stringify(roles));
  }

  public getRoles():any[]{
    return JSON.parse(<string>localStorage.getItem('roles'));
  }

  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken",jwtToken);
  }

  public getToken(): string{
    return <string>localStorage.getItem('jwtToken');
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
