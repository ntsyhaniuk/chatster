import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTextComponent } from './filter-text.component';

import { ButtonsModule, AlertModule, DropdownModule } from 'ng2-bootstrap';

import { UsersService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    DropdownModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FilterTextComponent
  ],
  providers: [UsersService]
})

export class SharedModule {

}
