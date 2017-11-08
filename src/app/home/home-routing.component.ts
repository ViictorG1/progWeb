import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: '',      component: HomeComponent },
          { path: 'tasks', loadChildren: 'app/tasks/tasks.module#TasksModule' }
        ]
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {
}
