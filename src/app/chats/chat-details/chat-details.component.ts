import {Component, OnInit} from '@angular/core';
import { MessageService } from '../../messages/shared/message.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {CustomNotificationService} from '../../shared/services/notifications.service';
import {SocketService} from '../../shared/services/socket.service';

@Component({
  selector: 'ct-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss']
})

export class ChatDetailsComponent implements OnInit{

  public searchValue = '';
  private chatId = null;

  constructor(private messageService: MessageService, private route: ActivatedRoute,
              private router: Router, private socketService: SocketService,
              private notificationService: CustomNotificationService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.chatId = params['id'];
    });
  }

  public clearSearch(): void {
    this.searchValue = '';
    this.messageService.setSeachValue('');
  }

  public onSearch(value: string): void {
    this.messageService.setSeachValue(value);
  }

  public deleteChat(): void {
    this.socketService.deleteChat(this.chatId).then(res => {
      this.notificationService.success(res.message);
      this.router.navigate(['/chat']);
    });
  }
}
