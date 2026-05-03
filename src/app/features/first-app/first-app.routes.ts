import { Routes } from '@angular/router';
import { ComingSoonComponent } from '../../shared/components/coming-soon/coming-soon.component';

export const firstAppRoutes: Routes = [
  { path: 'step-1', component: ComingSoonComponent, data: { title: 'Hello World' } },
  { path: 'step-2', component: ComingSoonComponent, data: { title: 'Home Component' } },
  { path: 'step-3', component: ComingSoonComponent, data: { title: 'Housing Location' } },
  { path: 'step-4', component: ComingSoonComponent, data: { title: 'Interfaces' } },
  { path: 'step-5', component: ComingSoonComponent, data: { title: 'Inputs' } },
  { path: 'step-6', component: ComingSoonComponent, data: { title: 'Property Binding' } },
  { path: 'step-7', component: ComingSoonComponent, data: { title: 'Dynamic Templates' } },
  { path: 'step-8', component: ComingSoonComponent, data: { title: '@for Loop' } },
  { path: 'step-9', component: ComingSoonComponent, data: { title: 'Services' } },
  { path: 'step-10', component: ComingSoonComponent, data: { title: 'Routing' } },
  { path: 'step-11', component: ComingSoonComponent, data: { title: 'Details Page' } },
  { path: 'step-12', component: ComingSoonComponent, data: { title: 'Forms' } },
  { path: 'step-13', component: ComingSoonComponent, data: { title: 'Search' } },
  { path: 'step-14', component: ComingSoonComponent, data: { title: 'HTTP' } },
  { path: '', redirectTo: 'step-1', pathMatch: 'full' },
];
