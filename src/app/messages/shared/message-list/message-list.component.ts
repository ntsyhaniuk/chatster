import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ct-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})

export class MessageListComponent implements OnInit {

  chatId: number;
  private searchValue: string = '';
  private subscription: Subscription;
  messages: Promise<Message[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.chatId = +params['id'];
      this.messages = this.messageService.getAll(this.chatId);
    })
    this.subscription = this.messageService
      .getSearchValue()
      .subscribe(value => this.searchValue = value)
  }
}
