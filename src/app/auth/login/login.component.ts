import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './login-user.interface';
import { AuthService } from '../../core/auth.service';
// import { config } from '../../../localConfig';
import {CustomNotificationService} from '../../shared/services/notifications.service';

// declare const gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];



  constructor (private authService: AuthService, private zone: NgZone, private router: Router,
               private notifications: CustomNotificationService) {
  }


  ngOnInit() {
/*    gapi.load('auth2', () => {
      const auth2 = gapi.auth2.init({
        client_id: config.GOOGLE_API.CLIENT_ID,
        cookiepolicy: config.GOOGLE_API.COOKIE_POLICY
      });
      auth2.attachClickHandler(
        document.getElementById('google-auth-btn'), {},
        this.onAuthSuccess.bind(this),
        this.onLoginError
      );
    });*/
  }

  onSubmit(formData) {
    const user: User = {
      email: formData.email,
      password: formData.password
    };
    this.subscriptions.push(
      this.authService
        .login(user, 'custom')
        .subscribe(this.onLoginSuccess.bind(this), this.onLoginError.bind(this))
    );
  }

  onLoginSuccess(data): void {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user_profile', JSON.stringify(data.user));
    this.notifications.success('Login success');
    this.authService.setUserState(data.user);
    this.router.navigate(['/chat']);
  }

  onLoginError(e): void {
    const error = e.json();
    this.notifications.error(error.error);
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

/*  onAuthSuccess(user): void {
    this.zone.run(() => {
      const authData = user.getAuthResponse(),
          loggedUser = user.getBasicProfile();
      loggedUser.token = authData.id_token;
      this.authService
        .login(loggedUser, 'google')
        .subscribe((user): void => {
            this.authService.setUserState(user);
            this.router.navigate(['/chat']);
          }
        );
    });
  }*/
}
