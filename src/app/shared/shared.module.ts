import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTextComponent } from './filter-text.component';
import { ButtonsModule, AlertModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FilterTextComponent
  ],
  providers: []
})

export class SharedModule {

}
