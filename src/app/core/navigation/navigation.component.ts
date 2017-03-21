import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  constructor(private auth: AuthService) {}
  isLoggedIn() {
    return this.auth.isLoggedIn;
  }
  logout() {
    this.auth.logout();
  }
}
