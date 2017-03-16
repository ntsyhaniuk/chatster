import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'ct-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})

export class ChatListComponent {
  selectedId: number;
  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  select(chat) {
    this.selectedId = chat.id;
    this.router.navigate(['chat', chat.id]);
  }
}
