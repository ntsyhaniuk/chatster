import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

    get isLoggedIn() {
        return localStorage.getItem('token');
    }
    login(user) {
        if (user) {
            localStorage.setItem('token', 'you logged');
        }
        console.log(localStorage.getItem('token'));
    }
    register() {

    }
    logout() {
        localStorage.removeItem('token');
    }
}
