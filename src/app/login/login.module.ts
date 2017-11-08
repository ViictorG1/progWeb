import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.component';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {
}
