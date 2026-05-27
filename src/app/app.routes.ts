import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { HallList } from './components/hall-list/hall-list';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'hall-list',
        component: HallList
    },
    {
        path: 'hall-form',
        component: HallList
    }
];
