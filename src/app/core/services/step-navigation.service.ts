import { Injectable, inject, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { TUTORIAL_REGISTRY } from '../models/tutorial-registry';

export interface FlatStep {
  categoryId: string;
  stepId: string;
  title: string;
  fullRoute: string;
}

@Injectable({ providedIn: 'root' })
export class StepNavigationService {
  private router = inject(Router);

  // Flatten the registry into a single list of steps
  private readonly flatSteps: FlatStep[] = TUTORIAL_REGISTRY.flatMap(category =>
    category.steps.map(step => ({
      categoryId: category.id,
      stepId: step.id,
      title: step.title,
      fullRoute: `/${category.id}/${step.route}`
    }))
  );

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects),
      startWith(this.router.url)
    )
  );

  private currentIndex = computed(() => {
    const url = this.currentUrl();
    if (!url) return -1;
    return this.flatSteps.findIndex(step => url.includes(step.fullRoute));
  });

  previousStep = computed(() => {
    const index = this.currentIndex();
    return index > 0 ? this.flatSteps[index - 1] : null;
  });

  nextStep = computed(() => {
    const index = this.currentIndex();
    return (index !== -1 && index < this.flatSteps.length - 1) ? this.flatSteps[index + 1] : null;
  });

  currentStepInfo = computed(() => {
    const index = this.currentIndex();
    return index !== -1 ? this.flatSteps[index] : null;
  });

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
