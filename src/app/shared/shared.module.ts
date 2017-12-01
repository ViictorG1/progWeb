import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components';

import { TasksService } from './services/tasks.service';
import { RestClientService } from './services/rest-client.service';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent
  ],
  providers: [
    TasksService,
    RestClientService
  ]
})
export class SharedModule {
}
