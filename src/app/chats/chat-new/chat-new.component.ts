import {Component, OnDestroy, OnInit} from '@angular/core';
import { UsersService } from '../../shared';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ct-chat-new',
  templateUrl: './chat-new.component.html',
  styleUrls: ['./chat-new.component.scss']
})

export class ChatNewComponent implements OnInit, OnDestroy {

  private users: any[] = [];
  private subscribtions: Subscription[] = [];
  private isListVisible: boolean = false;
  private inputValue: string = '';
  private chosenItem: string = '';

  constructor(private usersService: UsersService) {}


  ngOnInit() {
    this.subscribtions.push(
      this.usersService.getUsersList().subscribe(users=> {
        this.users = users;
        console.log(users);
      })
    )
  }

  ngOnDestroy() {
    this.subscribtions.map(subscribtion => subscribtion.unsubscribe());
  }


  createChat(value) {
    console.log(value);
  }

  choseItem(item) {
    this.listToggle(false);
    this.inputValue = item.username;
  }

  listToggle(value: boolean) {
    this.inputValue = '';
    this.isListVisible = value;
  }
}
