import { Component } from '@angular/core';
import { MessageService } from '../../messages/shared/message.service';

@Component({
  selector: 'ct-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss']
})

export class ChatDetailsComponent {

  private searchValue: string = '';

  constructor(private messageService: MessageService) {}

  private clearSearch(): void {
    this.searchValue = '';
    this.messageService.setSeachValue('');
  }

  private onSearch(value: string): void {
    this.messageService.setSeachValue(value);
  }
}
