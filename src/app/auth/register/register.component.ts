import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomEmailValidator } from '../../shared/validators/email.validator';
import { PasswordMatchValidator } from '../../shared/validators/confirm-password.validator';
import {AuthService} from '../../core/auth.service';
import {CustomNotificationService} from '../../shared/services/notifications.service';


@Component({
  selector: 'ct-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,
              private notificationsService: CustomNotificationService) {}

  ngOnInit() {
    this.user = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, CustomEmailValidator]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
      }, {validator: PasswordMatchValidator.isSamePassword})
    });
  }
  onSubmit(userForm) {
    const controls = userForm.controls;
    const user = {
      firstName: controls.firstName.value,
      lastName: controls.lastName.value,
      email: controls.email.value,
      password: controls.passwords.controls.password.value
    };
    this.auth.register(user).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user_profile', JSON.stringify(response.user));
        this.router.navigate(['/chat']);
      }, err => {
        const errorMessage = JSON.parse(err._body);
        this.notificationsService.error(errorMessage.error);
      }
    );
  }
}
