import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    get isLoggedIn() {
        return localStorage.getItem('token');
    }
    login(user) {
        if (user) {
            localStorage.setItem('token', 'you logged');
        }
    }
    register() {

    }
    logout() {
        localStorage.removeItem('token');
    }
}