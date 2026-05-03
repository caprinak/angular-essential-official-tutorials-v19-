import { Routes } from '@angular/router';
import { Step1Component } from './pages/step1.component';
import { Step2Component } from './pages/step2.component';
import { Step3Component } from './pages/step3.component';
import { Step4Component } from './pages/step4.component';
import { Step5Component } from './pages/step5.component';
import { Step8Component } from './pages/step8.component';
import { Step9Component } from './pages/step9.component';
import { Step14Component } from './pages/step14.component';

export const firstAppRoutes: Routes = [
  { path: 'step-1', component: Step1Component },
  { path: 'step-2', component: Step2Component },
  { path: 'step-3', component: Step3Component },
  { path: 'step-4', component: Step4Component },
  { path: 'step-5', component: Step5Component },
  { path: 'step-6', component: Step5Component }, // Reuse step 5 for demo
  { path: 'step-7', component: Step8Component }, // Reuse step 8 for demo
  { path: 'step-8', component: Step8Component },
  { path: 'step-9', component: Step9Component },
  { path: 'step-10', component: Step14Component }, // Redirect to final for complex steps
  { path: 'step-11', component: Step14Component },
  { path: 'step-12', component: Step14Component },
  { path: 'step-13', component: Step14Component },
  { path: 'step-14', component: Step14Component },
  { path: '', redirectTo: 'step-1', pathMatch: 'full' },
];
