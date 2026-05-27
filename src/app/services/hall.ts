import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from './user-auth';

@Injectable({
  providedIn: 'root',
})
export class HallService {
  BASE_URL = 'http://203.94.72.18/trainee/api';

  constructor(
    private http: HttpClient,
    private userAuth: UserAuth
  ) {}

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.userAuth.getToken()}`,
    });
  }

  getAllActiveHalls() {
    return this.http.get(`${this.BASE_URL}/production/hall/get/all/active`, {
      headers: this.getHeaders(),
    });
  }

  saveHall(hall: any) {
    return this.http.post(`${this.BASE_URL}/production/hall/save`, hall, {
      headers: this.getHeaders(),
    });
  }

  updateHall(hall: any) {
    return this.http.post(`${this.BASE_URL}/production/hall/update`, hall, {
      headers: this.getHeaders(),
    });
  }

  getHallById(id: string) {
    return this.http.get(
      `${this.BASE_URL}/production/hall/get/one/${id}`,
      { headers: this.getHeaders() }
    );
  }
}