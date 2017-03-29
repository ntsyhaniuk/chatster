import {Component, OnInit, OnDestroy} from '@angular/core';
import { AuthService } from '../auth.service';
import {Observable, Subscription} from 'rxjs';
import { Profile } from '../shared';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy{

  private profile: Profile;

  private subscriptions: Subscription[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.auth
        .getUserState()
        .subscribe(state => {
          console.log('state USER');
          console.log(state);
          this.profile = state.user;
        })
    )
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
