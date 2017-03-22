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
    login(user) {
        if (user) {
            localStorage.setItem('token', 'you logged');
            this.router.navigate(['/chat']);
        }

    }
    register() {

    }
    logout() {
        localStorage.removeItem('token');
    }
}
