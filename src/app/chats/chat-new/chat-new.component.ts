import {Component, OnInit} from '@angular/core';
import { UsersService } from '../../shared';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {CustomNotificationService} from '../../shared/services/notifications.service';
import {SocketService} from '../../shared/services/socket.service';

@Component({
  selector: 'ct-chat-new',
  templateUrl: './chat-new.component.html',
  styleUrls: ['./chat-new.component.scss']
})

export class ChatNewComponent implements OnInit {

  private users: Observable<any[]>;
  private isListVisible = false;
  public inputValue = '';
  private chosenRecipient: any = {};

  constructor(private usersService: UsersService, private socketService: SocketService,
              private router: Router, private notifications: CustomNotificationService) {}


  ngOnInit() {
    this.users =  this.usersService.getUsersList();
  }

  createChat(formData) {
    const obj = {
      recipient: this.chosenRecipient,
      composedMessage: formData.newChatMessage
    };
    this.socketService.createNewChat(obj).subscribe( res => {
      this.router.navigate(['/chat', res.conversationId]);
    }, err => this.notifications.error(err.message));
  }

  choseItem(recipient) {
    this.listToggle(false);
    this.inputValue = recipient.username;
    this.chosenRecipient = recipient;
  }

  listToggle(value: boolean) {
    this.inputValue = '';
    this.isListVisible = value;
  }
}
