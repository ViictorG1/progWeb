import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
