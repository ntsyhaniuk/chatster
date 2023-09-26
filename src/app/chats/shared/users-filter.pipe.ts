import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterUsers'
})

export class FilterUsersPipe implements PipeTransform {
  public transform(data: any, filterValue: string) {
    if (data && data.users && data.users.length) {
      return data.users.filter(user => {
        user.username = `${user.firstName} ${user.lastName}`;
        if (user.username) {
          return user.username.match(new RegExp(filterValue, 'gi'));
        }
      });
    }
  }

}
