import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
