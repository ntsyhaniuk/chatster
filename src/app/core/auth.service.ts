import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  // store the URL so we can redirect after logging in
  redirectUrl: string;

    get isLoggedIn() {
        return localStorage.getItem('token');
    }
    login(user, from) {
        if (user) {
          if (from && from == 'google') {
            localStorage.setItem('token', user.U3);
          } else {
            localStorage.setItem('token', user.email);
          }
            this.router.navigate(['/chat']);
        }

    }
    register() {

    }
    logout() {
        localStorage.removeItem('token');
    }
}
