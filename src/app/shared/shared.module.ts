import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTextComponent } from './filter-text.component';

import { ButtonsModule, AlertModule, TooltipModule } from 'ng2-bootstrap';


import { UsersService } from './services';
import { CustomNotificationService } from './services';
import { SocketService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FilterTextComponent
  ],
  providers: [
    UsersService,
    CustomNotificationService,
    SocketService
  ]
})

export class SharedModule {

}
