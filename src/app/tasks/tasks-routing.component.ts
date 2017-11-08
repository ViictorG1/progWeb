import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { NewTaskComponent } from './new-task.component';
import { TasksListComponent } from './tasks-list.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent,
        children: [
          { path: '',         component: TasksListComponent }
          //{ path: 'new',         component: NewTaskComponent }
        ]
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class TasksRoutingModule {
}
