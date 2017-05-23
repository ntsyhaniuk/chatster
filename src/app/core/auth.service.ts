import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Router} from '@angular/router';

// import { tokenNotExpired } from 'angular2-jwt';
import {BehaviorSubject, Observable} from 'rxjs';

import { config } from '../../localConfig';
import { Profile } from './shared';

// declare const Auth0Lock: any;


@Injectable()
export class AuthService {

  redirectUrl: string;

  private _authenticated = false;
  private _state: BehaviorSubject<any> = new BehaviorSubject<any>({});

  // lock = new Auth0Lock(config.AUTH_API.CLIENT_ID, config.AUTH_API.DOMAIN, {});

  constructor(private http: Http, private router: Router) {
   /* this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }
        profile.token = authResult.idToken;

        this.login(profile, 'auth').subscribe(user => {
          this.setUserState(user);
          this.router.navigate(['/chat']);
        });
      });

      this.lock.hide();
    });*/
  }


  public setUserState(state: any): void {
    this._authenticated = true;
    this._state.next(state);
  }

  public getUserState(): BehaviorSubject<any> {
    return this._state;
  }


  // store the URL so we can redirect after logging in


  get isLoggedIn(): string {
     return localStorage.getItem('token');
  }

/*  authLogin() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }*/

  login(user, from): Observable<any> {
    console.log('user');
    console.log(user);
    if (user) {
      const profile: Profile = {
        photo: null,
        fullName: null
      };
      if (from && from === 'google') {
        profile.photo = user.Paa;
        profile.fullName = user.ig;
        localStorage.setItem('token', user.token);
      } else if (from && from === 'auth') {
        profile.photo = user.picture;
        profile.fullName = user.name;
        localStorage.setItem('token', user.token);
      } else {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(`${config.BACKEND_URL.API}/auth/login`, user, options).map(res => res.json());
      }
      localStorage.setItem('user_profile', JSON.stringify(profile));
      return Observable.create(observer => {
        observer.next(profile);
      });
    }
  }

  register(user): Observable<any> {
    const newUser = {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    };
    return this.http.post(`${config.BACKEND_URL.API}/auth/register`, newUser).map(res => res.json());
  }

  getUserProfile() {
    return Observable.create(observer => {
      observer.next(JSON.parse(localStorage.getItem('user_profile')));
    });
  }

  logout() {
    this._authenticated = false;
    this._state.next({});
    localStorage.removeItem('user_profile');
    localStorage.removeItem('token');
  }
}
