import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './profile';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    UserProfileComponent
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    UserProfileComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})

export class CoreModule {

}
