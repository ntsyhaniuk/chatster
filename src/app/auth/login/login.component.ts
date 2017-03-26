import { Component, OnInit, NgZone } from '@angular/core';
import { User } from './login.interface';
import { AuthService } from '../../core/auth.service';
import { config } from '../../../localConfig';
declare const gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };
  onSubmit(formData) {
    console.log(formData);
    this.authService.login(formData, 'custom');
  }
  constructor (private authService: AuthService, private zone: NgZone) {}

  ngOnInit() {
    gapi.load('auth2', () => {
      let auth2 = gapi.auth2.init({
        client_id: config.GOOGLE_API.CLIENT_ID,
        cookiepolicy: config.GOOGLE_API.COOKIE_POLICY
      });
      auth2.attachClickHandler(
        document.getElementById('google-auth-btn'), {},
        this.onSuccess.bind(this),
        this.onFailure
      )
    })
  }

  onFailure(e) {
    console.log(e.error)
  }

  onSuccess(user): void {
    this.zone.run(() => {
      let authData = user.getAuthResponse(),
          loggedUser = user.getBasicProfile();
      loggedUser.token = authData.id_token;
      this.authService.login(loggedUser, 'google');
    })
  }
}
