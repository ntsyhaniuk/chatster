import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { Profile } from '../../core/shared';
import { User } from './login-user.interface';
import { AuthService } from '../../core/auth.service';
import { config } from '../../../localConfig';
import * as io from 'socket.io-client';
declare const gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  socket: SocketIOClient.Socket;

  constructor (private authService: AuthService, private zone: NgZone, private router: Router) {
    this.socket = io.connect(config.SOCKET.LINK);
  }


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
        this.onLoginError
      )
    })
    this.socket.on('connect', () => {
      this.socket.emit('authenticate', { token: localStorage.getItem('token') })
    });
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

  onLoginSuccess(data): void {
    console.log('after login success');
    console.log(data);
    let profile: Profile = {
      name: data.user.username,
      photo: ''
    };
    localStorage.setItem('token', data.token);
    localStorage.setItem('user_profile', JSON.stringify(profile));
    this.authService.setUserState(profile);
    this.router.navigate(['/chat']);
  }

  onLoginError(e): void {
    console.log(e);
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  onAuthSuccess(user): void {
    this.zone.run(() => {
      let authData = user.getAuthResponse(),
          loggedUser = user.getBasicProfile();
      loggedUser.token = authData.id_token;
      this.authService
        .login(loggedUser, 'google')
        .subscribe(
          (user): void => {
            this.authService.setUserState(user);
            this.router.navigate(['/chat']);
          }
        )
    })
  }
}
