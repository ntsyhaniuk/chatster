import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomEmailValidator } from '../../shared/validators/email.validator';
import { PasswordMatchValidator } from '../../shared/validators/confirm-password.validator';
import {AuthService} from '../../core/auth.service';


@Component({
  selector: 'ct-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, CustomEmailValidator]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
      }, {validator: PasswordMatchValidator.isSamePassword})
    })
  }
  onSubmit(userForm) {
    let controls = userForm.controls;
    let user = {
      name: controls.name.value,
      email: controls.email.value
    };
    this.auth.login(user, 'registration');
  }
}
