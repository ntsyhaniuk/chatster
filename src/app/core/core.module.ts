import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, NavigationComponent],
  exports: [HeaderComponent, NavigationComponent]
})

export class CoreModule {

}
