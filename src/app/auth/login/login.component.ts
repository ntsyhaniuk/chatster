import { Component, OnInit } from '@angular/core';
import { User } from './login.interface';
import { AuthService } from '../../core/auth.service';

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
    this.authService.login(formData);
  }
  constructor (private authService: AuthService) {}
  ngOnInit() {

  }
}
