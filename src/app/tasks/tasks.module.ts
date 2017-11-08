import { NgModule } from '@angular/core';

import { ColorPickerModule } from 'ngx-color-picker';

import { TasksRoutingModule } from './tasks-routing.component';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    TasksRoutingModule,
    SharedModule,
    ColorPickerModule
  ],
  declarations: [
    TasksComponent,
    TasksListComponent
  ]
})
export class TasksModule {
}
