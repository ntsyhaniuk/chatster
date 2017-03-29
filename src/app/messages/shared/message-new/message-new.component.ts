import {Component, OnInit} from '@angular/core';
import { MessagesSocketService } from '../messages-socket.service';

@Component({
  selector: 'ct-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.scss']
})
export class MessageNewComponent implements OnInit{

  private message: string = '';

  constructor(private socketService: MessagesSocketService) {}

  ngOnInit() {
    this.socketService.get().subscribe(item=> {
      console.log(item);
    })
  }

  startConnection() {
    /*this.socketService.connect();*/
  }

  sendMessage() {
    console.log(this.message);
    this.socketService.sendMessage(this.message);
    this.message = '';
  }
}
