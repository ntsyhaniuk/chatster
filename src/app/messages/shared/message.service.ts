import { Injectable } from '@angular/core';
import { MESSAGES } from './mock-messages';

@Injectable()
export class MessageService {
    getAll(chatId) {
        return Promise.resolve(MESSAGES.filter(item=> item.chatId === chatId));
    }
}