import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message.model';
import {Subscription} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../../core/auth.service';
import {SocketService} from '../../../shared/services/socket.service';

@Component({
  selector: 'ct-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})

export class MessageListComponent implements OnInit {

  private chatId: number;
  private searchValue = '';
  private subscription: Subscription;
  private messages: Observable<Message[]>;
  private profile = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private socketService: SocketService,
              private auth: AuthService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.chatId = params['id'];
      this.messages = this.socketService.getMessages(this.chatId);
    });
    this.subscription = this.messageService
      .getSearchValue()
      .subscribe(value => this.searchValue = value);
    this.auth.getUserProfile().subscribe(profile => this.profile = profile);
  }

  isRecipientMessage(id) {
    return id !== this.profile._id;
  }
}
