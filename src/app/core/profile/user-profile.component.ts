import {Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Profile } from '../shared';
import {Observable} from 'rxjs';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private profile: Observable<Profile>;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getProfile().subscribe(profile => this.profile = profile);
  }
}
