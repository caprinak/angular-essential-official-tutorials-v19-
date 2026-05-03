import { Routes } from '@angular/router';
import { Step1Component } from './pages/step1.component';
import { Step2Component } from './pages/step2.component';
import { Step3Component } from './pages/step3.component';
import { Step4Component } from './pages/step4.component';
import { Step5Component } from './pages/step5.component';
import { Step6Component } from './pages/step6.component';
import { Step7Component } from './pages/step7.component';
import { Step8Component } from './pages/step8.component';
import { Step9Component } from './pages/step9.component';
import { Step10Component } from './pages/step10.component';

export const signalsRoutes: Routes = [
  { path: 'step-1', component: Step1Component },
  { path: 'step-2', component: Step2Component },
  { path: 'step-3', component: Step3Component },
  { path: 'step-4', component: Step4Component },
  { path: 'step-5', component: Step5Component },
  { path: 'step-6', component: Step6Component },
  { path: 'step-7', component: Step7Component },
  { path: 'step-8', component: Step8Component },
  { path: 'step-9', component: Step9Component },
  { path: 'step-10', component: Step10Component },
  { path: '', redirectTo: 'step-1', pathMatch: 'full' },
];
