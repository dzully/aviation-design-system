import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor() {}

  openStatus = true;
  isOpened = '255px';
  isOpenedSidebar = '255px';

  handleClick() {
    // close isOpened
    this.isOpened = this.isOpened === '255px' ? '50px' : '255px';
    this.isOpenedSidebar = this.isOpenedSidebar === '255px' ? '62px' : '255px';
    this.openStatus = !this.openStatus;
    console.log('handleClick');
  }
}
