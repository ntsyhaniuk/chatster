import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, NavigationComponent, FooterComponent],
  exports: [HeaderComponent, NavigationComponent, FooterComponent]
})

export class CoreModule {

}
