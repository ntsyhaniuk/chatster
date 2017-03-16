import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthRoutingModule } from './auth-routing.module';
import {SharedModule} from '../shared';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  providers: []
})

export class AuthModule {

}
