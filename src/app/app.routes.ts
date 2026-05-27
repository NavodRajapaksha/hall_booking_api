import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { HallList } from './components/hall-list/hall-list';
import { authGuard } from './components/auth/auth-guard';
import { HallForm } from './components/hall-form/hall-form';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    { 
        path: 'hall-list', 
        component: HallList, 
        // canActivate: [authGuard] 
    },
    { 
        path: 'hall-form', 
        component: HallForm, 
        // canActivate: [authGuard] 
    },
    { 
        path: 'hall-form/:id', 
        component: HallForm, 
        // canActivate: [authGuard] 
    },
];
