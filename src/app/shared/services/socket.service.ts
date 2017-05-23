import {Injectable} from '@angular/core';
import {config} from '../../../localConfig';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import {NotificationsService} from 'angular2-notifications/dist';

@Injectable()
export class SocketService {

  socket: SocketIOClient.Socket;

  constructor(private notificationsService: NotificationsService) {
    this.socket = io.connect(config.SOCKET.LINK);
    this.socket.on('connect', () => {
      this.socket.emit('authenticate', {token: localStorage.getItem('token').substring(4)});
      this.socket.on('authenticated', () => {
        console.log('Socket connection started!');
      })
    });
  }

  getChatList(): any {
    this.socket.emit('get conversations');
    return new Observable(observer => {
      this.socket.on('update conversations', (data) => {
        observer.next(data);
      });
    });
  }

  createNewChat(data): any {
    this.socket.emit('new chat', data);
    return new Observable(observer => {
      this.socket.on('chat created', (id) => {
        this.socket.emit('get conversations');
        observer.next(id);
      });
      this.socket.on('some error', (err) => {
        observer.error(err);
      });
    })
  }

  deleteChat(id): any {
    this.socket.emit('delete conversation', id);
    return new Promise(res => {
      this.socket.on('conversation deleted', (data) => {
        this.socket.emit('get conversations');
        res(data);
      })
    })
  }

  getMessages(chatId): any {
    this.socket.emit('get messages', chatId);
    return new Observable(observer => {
      this.socket.on('update messages', (data) => {
        observer.next(data);
      });
      this.socket.on('message saved', () => {
        this.socket.emit('get messages', chatId);
      });
      this.socket.on('some error', (err) => {
        this.notificationsService.error('Error', err.message);
      });
    });
  }

  sendMessage(message) {
    this.socket.emit('new message', message);
  }
}
