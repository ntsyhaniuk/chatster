import {Component, Input} from '@angular/core';
import {Chat} from '../shared';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ct-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})

export class ChatListComponent {
  @Input() chats: Observable<Chat[]>;
  public isHidden = false;
  private searchValue = '';

  constructor() {}

  clearSearch() {
    this.searchValue = '';
  }

  listToggle() {
    this.isHidden = !this.isHidden;
  }
}
