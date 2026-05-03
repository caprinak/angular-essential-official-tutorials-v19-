import { Routes } from '@angular/router';
import { BestPracticesComponent } from './pages/best-practices.component';
import { AdvancedComponentsComponent } from './pages/advanced-components.component';
import { CustomPipesComponent } from './pages/custom-pipes.component';
import { ArchitecturePatternsComponent } from './pages/architecture-patterns.component';

export const extendedLearningRoutes: Routes = [
  { path: 'best-practices', component: BestPracticesComponent },
  { path: 'advanced-components', component: AdvancedComponentsComponent },
  { path: 'custom-pipes', component: CustomPipesComponent },
  { path: 'architecture-patterns', component: ArchitecturePatternsComponent },
  { path: '', redirectTo: 'best-practices', pathMatch: 'full' },
];
