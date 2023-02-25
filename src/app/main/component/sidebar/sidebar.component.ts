import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  listOfSidebar = [
    {
      id: 'overview',
      name: 'Overview',
      link: 'overview',
      icon: 'dashboard',
      disable: false,
    },
    {
      id: 'wind',
      name: 'Wind',
      link: 'wind',
      icon: 'air',
      disable: false,
    },
    {
      id: 'waves',
      name: 'Waves',
      link: 'waves',
      icon: 'dashboard',
      disable: false,
    },
    {
      id: 'weather',
      name: 'Weather',
      link: 'weather',
      icon: 'filter_drama',
      disable: false,
    },
    {
      id: 'cctv',
      name: 'CCTV (Coming later)',
      link: 'cctv',
      icon: 'videocam',
      disable: true,
    },
    {
      id: 'lightning',
      name: 'Lightning (Coming later)',
      link: 'lightning',
      icon: 'flash_on',
      disable: true,
    },
  ];

  showFiller = false;
  listSidebar = this.listOfSidebar;
  selectedPath = '';
  username = 'Dajak';
  shortUsername = 'DJ';

  isActive(path: string) {
    return this.router.url.includes(path);
  }

  ngAfterViewInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // get the current path from the activated route
        const path = this.activatedRoute.firstChild?.snapshot.url[0].path;

        // update the style of the active mat-list-item
        const activeItem = document.querySelector(
          `mat-list-item a[routerLink="${path}"]`
        );

        if (path) {
          this.selectedPath = path;
        }

        if (activeItem) {
          activeItem.classList.add('active');
        }
      });
  }
}
