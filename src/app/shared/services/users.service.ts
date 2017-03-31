import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../localConfig';
import {Observable} from "rxjs";

@Injectable()

export class UsersService {

  constructor(private http: Http) {}

  getUsersList():Observable<any> {
    return this.http.get(config.BACKEND_URL.USERS).map(res => res.json());
  }

}
