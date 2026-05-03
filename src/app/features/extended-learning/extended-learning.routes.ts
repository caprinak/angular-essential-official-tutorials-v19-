import { Routes } from '@angular/router';
import { BestPracticesComponent } from './pages/best-practices.component';
import { AdvancedComponentsComponent } from './pages/advanced-components.component';
import { CustomPipesComponent } from './pages/custom-pipes.component';

export const extendedLearningRoutes: Routes = [
  { path: 'best-practices', component: BestPracticesComponent },
  { path: 'advanced-components', component: AdvancedComponentsComponent },
  { path: 'custom-pipes', component: CustomPipesComponent },
  { path: '', redirectTo: 'best-practices', pathMatch: 'full' },
];
