import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TUTORIAL_REGISTRY } from '../../models/tutorial-registry';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('200ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('150ms ease-in', style({ height: '0', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  readonly tutorials = TUTORIAL_REGISTRY;

  /** Tracks which categories are expanded in the sidebar. */
  expandedCategories = signal<Set<string>>(new Set<string>());

  toggleCategory(categoryId: string): void {
    this.expandedCategories.update(current => {
      const next = new Set(current);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  }

  isCategoryExpanded(categoryId: string): boolean {
    return this.expandedCategories().has(categoryId);
  }
}
