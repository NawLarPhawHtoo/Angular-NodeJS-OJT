import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Resolver Example';
  loading = false;

  constructor(public router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.loading = true;
      }
      if (
        ev instanceof NavigationEnd ||
        ev instanceof NavigationError ||
        ev instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
  }
}
