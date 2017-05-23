import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  notificationOptions = {
    showProgressBar: false,
    timeOut: 5000,
    preventDuplicates: true
  };
}
