import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { MessageService } from './message.service';
import { MessagesSocketService } from './messages-socket.service';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';
import { HighlightDirective } from './custom-highlight.directive';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    HighlightDirective
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent,
    MessageNewComponent
  ],
  providers: [MessageService, MessagesSocketService]
})

export class MessagesSharedModule {

}
