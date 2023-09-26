import { Component, OnInit } from '@angular/core';
import { Chat } from './shared';
import {Observable} from 'rxjs/Observable';
import {SocketService} from '../shared/services/socket.service';


@Component({
  selector: 'chats-wrapper',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})

export class ChatsComponent implements OnInit {
  profile = null;
  chats: Observable<Chat[]>;
  constructor(private socketService: SocketService) {}
  ngOnInit() {
    this.chats = this.socketService.getChatList();
  }
}
