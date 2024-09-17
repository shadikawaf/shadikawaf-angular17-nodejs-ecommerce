import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-notification></app-notification>
    <router-outlet></router-outlet>

    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = 'store';
}
