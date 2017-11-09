import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  user: any;
  collapse: string = 'none';

  // constructor(
  // ) {}

  collapseMenu() {
    if (this.collapse === 'block') {
      this.collapse = 'none';
      $('.collapse').css('display', 'none');    
    } else {
      this.collapse = 'block';
      $('.collapse').css('display', 'block');
    }
  }

}
