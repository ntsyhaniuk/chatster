import {Injectable} from '@angular/core';
import {config} from '../../../localConfig';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable()
export class MessagesSocketService {

  socket: any;

  constructor() {}



  get(): Observable<any> {
    this.socket = io(config.SOCKET.LINK);
    this.socket.on('connect', ()=> {
      this.socket.emit('authenticate', { token: localStorage.getItem('token')})
    });
    this.socket.on('error', (error)=> {
      console.log(error);
    });
    return Observable.create(observer=> {
      this.socket.on('message', (item: any) => {
        observer.next({
          action: 'message',
          item: item
        });
      });
      this.socket.on('join', (item: any) => {
        observer.next({
          action: 'join',
          item: item
        });
      });
      this.socket.on('leave', (item: any) => {
        observer.on({
          action: 'leave',
          item: item
        });
      });
      return this.socket.close();
    });
  }

  /*connect() {
    this.socket = io.connect(config.SOCKET.LINK);
    this.socket.on('connect', ()=> {
      console.log('socket connected');
    });
    this.socket.on('message', (msg)=> {
      console.log(msg);
    });
  }*/



  sendMessage(message) {
    this.socket.emit('message', message);
  };

  joinGroup(group) {
    this.socket.emit('join', group);
  }

  leaveGroup(group) {
    this.socket.emit('leave', group);
  }

}
