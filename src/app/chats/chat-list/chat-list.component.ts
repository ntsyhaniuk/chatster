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
  private isHidden: boolean = false;
  private searchValue: string = '';

  constructor(private router: Router) {

  }

  select(chat: Chat) {
    this.searchValue = '';
    this.router.navigate(['chat', chat.id]);
  }

  clearSearch() {
    this.searchValue = '';
  }

  listToggle() {
    this.isHidden = !this.isHidden;
  }
}
