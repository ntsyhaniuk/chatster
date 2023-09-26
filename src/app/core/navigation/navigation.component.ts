import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  constructor(private auth: AuthService,
              private router: Router) {}

  public get isLoggedIn(): string {
    return this.auth.isLoggedIn;
  }

  public logout(): void {
    this.auth.logout();
    this.router.navigate(['auth/login']);
  }
}
