import { NgModule } from '@angular/core';

import { TasksRoutingModule } from './tasks-routing.component';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    TasksRoutingModule,
    SharedModule
  ],
  declarations: [
    TasksComponent,
    TasksListComponent
  ]
})
export class TasksModule {
}
