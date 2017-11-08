import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components';

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
    /**
     * Do not provide any service from ShareModule.
     * Common services must be defined and provided by CoreModule.
     **/
  ]
})
export class SharedModule {
}
