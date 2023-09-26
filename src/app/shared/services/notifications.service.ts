import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';


@Injectable()
export class CustomNotificationService {

  constructor(private notifications: NotificationsService) {}

  success(message) {
    return this.notifications.success('Success!', message);
  }

  error(message) {
    return this.notifications.error('Oops!', message);
  }


}
