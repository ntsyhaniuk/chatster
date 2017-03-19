import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Chat} from '../shared';

@Component({
  selector: 'ct-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})

export class ChatListComponent {
  @Input() chats: Promise<Chat[]>;
  isHidden: boolean = false;

  constructor(private router: Router) {

  }

  select(chat: Chat) {
    this.router.navigate(['chat', chat.id]);
  }

  listToggle() {
    this.isHidden = !this.isHidden;
  }
}
