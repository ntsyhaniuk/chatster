import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterUsers'
})

export class FilterUsersPipe implements PipeTransform {
  public transform(users: any[], filterValue: string) {
    if (users) {
      return users.filter(user => {
        return user.username.match(new RegExp(filterValue, 'gi'));
      });
    } else {
      return users;
    }
  }

}
