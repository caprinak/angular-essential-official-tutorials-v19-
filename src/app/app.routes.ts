import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'learn-angular',
        loadChildren: () =>
          import('./features/learn-angular/learn-angular.routes').then(m => m.learnAngularRoutes),
      },
      {
        path: 'signals',
        loadChildren: () =>
          import('./features/signals/signals.routes').then(m => m.signalsRoutes),
      },
      {
        path: 'signal-forms',
        loadChildren: () =>
          import('./features/signal-forms/signal-forms.routes').then(m => m.signalFormsRoutes),
      },
      {
        path: 'first-app',
        loadChildren: () =>
          import('./features/first-app/first-app.routes').then(m => m.firstAppRoutes),
      },
      {
        path: 'deferrable-views',
        loadChildren: () =>
          import('./features/deferrable-views/deferrable-views.routes').then(m => m.deferrableViewsRoutes),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
