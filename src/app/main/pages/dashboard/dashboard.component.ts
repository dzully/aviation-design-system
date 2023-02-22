import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
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
      icon: 'dashboard',
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
      icon: 'dashboard',
      disable: false,
    },
    {
      id: 'cctv',
      name: 'CCTV (Coming later)',
      link: 'cctv',
      icon: 'dashboard',
      disable: true,
    },
    {
      id: 'lightning',
      name: 'Lightning (Coming later)',
      link: 'lightning',
      icon: 'dashboard',
      disable: true,
    },
  ];

  showFiller = false;
  listSidebar = this.listOfSidebar;

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
        if (activeItem) {
          activeItem.classList.add('active');
        }
      });
  }
}
