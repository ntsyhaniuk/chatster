import { FormGroup, FormControl } from '@angular/forms';

export class PasswordMatchValidator {

  static isSamePassword(group: FormGroup) {
    if (group.controls['password'].value !== group.controls['confirmPassword'].value) {
      return {
        notSamePassword: true
      }
    }
  }

}
