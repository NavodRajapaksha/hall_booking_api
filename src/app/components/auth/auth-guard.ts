import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../../services/user-auth';
import { User } from '../../services/user';

export const authGuard: CanActivateFn = (route, state) => {

  const userAuth = inject(UserAuth);
  const router = inject(Router);
  const user = inject(User);

  if(userAuth.getToken() !== null) {
    const role = route.data['roles'] as Array<string>;
    if(role) {
      const match = user.roleEqual(role);
      if(match) {
        return true;
      } else {
        router.navigate(['/forbidden']);
        return false;
      }
    }
  }

  router.navigate(['/login']);
  return false;

};