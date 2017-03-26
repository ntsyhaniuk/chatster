import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import {Observable} from 'rxjs';
import { config } from '../../localConfig';
import { Profile } from './shared';

declare const Auth0Lock: any;


@Injectable()
export class AuthService {

  lock = new Auth0Lock(config.AUTH_API.CLIENT_ID, config.AUTH_API.DOMAIN, {});

  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }
        profile.token = authResult.idToken;

        this.login(profile, 'auth');
      });

      this.lock.hide();
    });
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  get isLoggedIn() {
    return localStorage.getItem('token');
  }

  authLogin() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }





  login(user, from) {
    console.log('user');
    console.log(user);
    if (user) {
      let profile: Profile = {
        photo: null,
        name: null
      };
      if (from && from === 'google') {
        profile.photo = user.Paa;
        profile.name = user.ig;
        localStorage.setItem('token', user.token);
      } else if(from && from === 'auth') {
        profile.photo = user.picture;
        profile.name = user.name;
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
