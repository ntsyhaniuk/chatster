import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { config } from '../../../localConfig';
import {AuthService} from '../../core/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class UsersService {

  constructor(private http: Http, private authenticationService: AuthService) {}

  getUsersList(): Observable<any> {
    const headers = new Headers({ 'Authorization': this.authenticationService.isLoggedIn });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${config.BACKEND_URL.API}/users/all`, options).map(res => res.json());
  }

}
