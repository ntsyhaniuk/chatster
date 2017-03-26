import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  get isLoggedIn() {
    return localStorage.getItem('token');
  }

  login(user, from) {
    if (user) {
      let profile = {
        photo: null,
        name: null
      };
      if (from && from == 'google') {
        profile.photo = user.Paa;
        profile.name = user.ig;
        localStorage.setItem('token', user.token);
      } else {
        profile.name = 'Unnamed profile';
        localStorage.setItem('token', user.email);
      }
      localStorage.setItem('user_profile', JSON.stringify(profile));
      this.router.navigate(['/chat']);
    }

  }

  register() {

  }

  getProfile() {
    return Observable.create(observer=> {
      observer.next(JSON.parse(localStorage.getItem('user_profile')));
      observer.complete();
    });
  }

  logout() {
    localStorage.removeItem('user_profile');
    localStorage.removeItem('token');
  }
}
