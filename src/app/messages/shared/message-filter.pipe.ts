import { Pipe, PipeTransform } from '@angular/core';
import { Message } from './message.model';

@Pipe({
  name: 'filterMessages'
})

export class FilterMessagesPipe implements PipeTransform {
  public transform(chats: Message[], filterValue: string) {
    if (chats) {
      return chats.filter(chat => {
        return chat.text.match(new RegExp(filterValue, 'gi'));
      });
    } else {
      return chats;
    }
  }

}
