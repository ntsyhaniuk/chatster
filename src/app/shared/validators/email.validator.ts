import { FormControl } from '@angular/forms';

export function CustomEmailValidator(control: FormControl) {
  const emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(control.value) ? null : {
    CustomEmailValidator: {
      valid: false
    }
  };
}
