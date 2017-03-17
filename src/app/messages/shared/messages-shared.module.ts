import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { MessageService } from './message.service';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent,
    MessageNewComponent
  ],
  providers: [MessageService]
})

export class MessagesSharedModule {

}
