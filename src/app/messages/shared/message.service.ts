import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class MessageService {

  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  public setSeachValue(value: string): void {
    this.search$.next(value);
  }

  public getSearchValue(): BehaviorSubject<string> {
    return this.search$;
  }
}
