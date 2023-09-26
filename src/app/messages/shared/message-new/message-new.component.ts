import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {MessageService} from '../message.service';
import {SocketService} from '../../../shared/services/socket.service';

@Component({
  selector: 'ct-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.scss']
})
export class MessageNewComponent implements OnInit {

  public chatId = '';

  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageService,
              private socketService: SocketService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.chatId = params['id'];
    });
  }

  onSubmit(f: NgForm) {
    const newMessage = {
      composedMessage: f.value.newMessage,
      conversationId: this.chatId
    };
    this.socketService.sendMessage(newMessage);
  }
}
