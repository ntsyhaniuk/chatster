import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ChatsComponent } from './chats.component';
import { ChatListComponent } from './chat-list';
import { ChatDetailsComponent } from './chat-details';
import { ChatNewComponent } from './chat-new';
import { ChatHolderComponent } from './chat-holder';
import { ChatsRoutingModule } from './chats-routing.module';
import { MessagesSharingModule } from '../messages';

@NgModule({
  declarations: [
    ChatsComponent,
    ChatListComponent,
    ChatDetailsComponent,
    ChatNewComponent,
    ChatHolderComponent
  ],
  imports: [
    SharedModule,
    MessagesSharingModule,
    ChatsRoutingModule
  ],
  providers: []
})

export class ChatsModule {

}
