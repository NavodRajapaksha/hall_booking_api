import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { Header } from './components/header/header';
import { HallForm } from './components/hall-form/hall-form';
import { HallList } from './components/hall-list/hall-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Login,
    Header,
    HallForm,
    HallList

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hall-booking-api');
}
