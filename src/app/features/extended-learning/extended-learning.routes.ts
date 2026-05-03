import { Routes } from '@angular/router';
import { BestPracticesComponent } from './pages/best-practices.component';

export const extendedLearningRoutes: Routes = [
  { path: 'best-practices', component: BestPracticesComponent },
  { path: '', redirectTo: 'best-practices', pathMatch: 'full' },
];
