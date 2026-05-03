import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p>This is your Angular practice lab.</p>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-learning-lab';
}
