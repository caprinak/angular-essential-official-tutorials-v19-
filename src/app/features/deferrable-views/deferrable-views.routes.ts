import { Routes } from '@angular/router';
import { Step1Component } from './pages/step1.component';
import { Step2Component } from './pages/step2.component';
import { Step3Component } from './pages/step3.component';

export const deferrableViewsRoutes: Routes = [
  { path: 'step-1', component: Step1Component },
  { path: 'step-2', component: Step2Component },
  { path: 'step-3', component: Step3Component },
  { path: '', redirectTo: 'step-1', pathMatch: 'full' },
];
