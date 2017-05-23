import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { MessageService } from './message.service';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';
import { HighlightDirective } from './custom-highlight.directive';
import { FilterMessagesPipe } from './message-filter.pipe';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    HighlightDirective,
    FilterMessagesPipe
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
