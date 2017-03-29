import {Injectable} from '@angular/core';
import {MESSAGES} from './mock-messages';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MessageService {

  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  getAll(chatId) {
    return Promise.resolve(MESSAGES.filter(item => item.chatId === chatId));
  }

  public setSeachValue(value: string): void {
    this.search$.next(value);
  }

  public getSearchValue(): BehaviorSubject<string> {
    return this.search$;
  }
}
