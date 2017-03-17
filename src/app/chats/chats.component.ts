import { Component, OnInit } from '@angular/core';
import { ChatService, Chat } from './shared';

@Component({
  selector: 'chats-wrapper',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})

export class ChatsComponent implements OnInit {
  chats: Promise<Chat[]>;
  constructor(private chatService: ChatService) {}
  ngOnInit() {
    this.chats = this.chatService.getAll();
  }
}
