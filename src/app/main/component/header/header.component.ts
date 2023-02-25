import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  substationList = [
    { name: 'HOW01 Z11 OSS', id: 1 },
    { name: 'HOW01 Z12 OSS', id: 2 },
    { name: 'HOW01 Z13 OSS', id: 3 },
  ];
  selectedSubstation = this.substationList[0];
}
