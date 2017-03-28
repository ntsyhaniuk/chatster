import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { User } from './login-user.interface';
import { AuthService } from '../../core/auth.service';
import { config } from '../../../localConfig';
declare const gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  constructor (private authService: AuthService, private zone: NgZone, private router: Router) {}


  private subscriptions: Subscription[] = [];


  ngOnInit() {
    gapi.load('auth2', () => {
      let auth2 = gapi.auth2.init({
        client_id: config.GOOGLE_API.CLIENT_ID,
        cookiepolicy: config.GOOGLE_API.COOKIE_POLICY
      });
      auth2.attachClickHandler(
        document.getElementById('google-auth-btn'), {},
        this.onAuthSuccess.bind(this),
        this.onAuthFailure
      )
    })
  }

  onSubmit(formData) {
    let user: User = {
      username: formData.email,
      pass: formData.password
    };
    this.subscriptions.push(
      this.authService
        .login(user, 'custom')
        .subscribe(this.onLoginSuccess.bind(this), this.onLoginError)
    );
  }

  onLoginSuccess(user): void {
    console.log(user);
    this.authService.setUserState(user);
    this.router.navigate(['/chat']);
  }

  onLoginError(e): void {

  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  onAuthFailure(e) {
    console.error(e.error);
  }

  onAuthSuccess(user): void {
    this.zone.run(() => {
      let self = this;
      let authData = user.getAuthResponse(),
          loggedUser = user.getBasicProfile();
      loggedUser.token = authData.id_token;
      this.authService
        .login(loggedUser, 'google')
        .subscribe(
          (user): void => {
            console.log('from auth');
            console.log(user);
            this.authService.setUserState(user);
            this.router.navigate(['/chat']);
          }
        )
    })
  }
}
