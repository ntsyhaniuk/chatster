import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsComponent } from './chats.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatsComponent, ChatListComponent, ChatDetailsComponent],
  exports: []
})

export class ChatsModule {

}
