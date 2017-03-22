import { Component } from '@angular/core';
import {AuthService} from './core/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private auth: AuthService){}

  isLoggedIn() {
    return this.auth.isLoggedIn;
  }
}
