import { TutorialCategory } from './navigation.model';

/** Central registry of all tutorials and their steps. */
export const TUTORIAL_REGISTRY: TutorialCategory[] = [
  {
    id: 'learn-angular',
    title: 'Learn Angular',
    description: 'Angular fundamentals: components, binding, control flow, DI, pipes.',
    icon: '📘',
    steps: [
      { id: 'step-1', title: '1. Components', route: 'step-1' },
      { id: 'step-2', title: '2. Component Class', route: 'step-2' },
      { id: 'step-3', title: '3. Composing Components', route: 'step-3' },
      { id: 'step-4', title: '4. Control Flow: @if', route: 'step-4' },
      { id: 'step-5', title: '5. Control Flow: @for', route: 'step-5' },
      { id: 'step-6', title: '6. Property Binding', route: 'step-6' },
      { id: 'step-7', title: '7. Event Handling', route: 'step-7' },
      { id: 'step-8', title: '8. @Input', route: 'step-8' },
      { id: 'step-9', title: '9. @Output', route: 'step-9' },
      { id: 'step-10', title: '10. Deferrable Views', route: 'step-10' },
    ]
  },
  {
    id: 'signals',
    title: 'Signals',
    description: 'Reactive state management with Angular Signals.',
    icon: '⚡',
    steps: [
      { id: 'step-1', title: '1. First Signal', route: 'step-1' },
      { id: 'step-2', title: '2. Computed Signals', route: 'step-2' },
      { id: 'step-3', title: '3. Linked Signals', route: 'step-3' },
      { id: 'step-4', title: '4. Async Data', route: 'step-4' },
      { id: 'step-5', title: '5. Component Communication', route: 'step-5' },
      { id: 'step-6', title: '6. Two-Way Binding', route: 'step-6' },
      { id: 'step-7', title: '7. Signals with Services', route: 'step-7' },
      { id: 'step-8', title: '8. Signals with Directives', route: 'step-8' },
      { id: 'step-9', title: '9. Signal Queries', route: 'step-9' },
      { id: 'step-10', title: '10. Effects', route: 'step-10' },
    ]
  },
  {
    id: 'signal-forms',
    title: 'Signal Forms',
    description: 'Signal-based reactive forms with validation.',
    icon: '📝',
    steps: [
      { id: 'step-1', title: '1. Setup Form Model', route: 'step-1' },
      { id: 'step-2', title: '2. Connect Template', route: 'step-2' },
      { id: 'step-3', title: '3. Add Validation', route: 'step-3' },
      { id: 'step-4', title: '4. Display Errors', route: 'step-4' },
      { id: 'step-5', title: '5. Submission', route: 'step-5' },
    ]
  },
  {
    id: 'first-app',
    title: 'First App (Homes)',
    description: 'Build a complete housing listing app step by step.',
    icon: '🏠',
    steps: [
      { id: 'step-1', title: '1. Hello World', route: 'step-1' },
      { id: 'step-2', title: '2. Home Component', route: 'step-2' },
      { id: 'step-3', title: '3. Housing Location', route: 'step-3' },
      { id: 'step-4', title: '4. Interfaces', route: 'step-4' },
      { id: 'step-5', title: '5. Inputs', route: 'step-5' },
      { id: 'step-6', title: '6. Property Binding', route: 'step-6' },
      { id: 'step-7', title: '7. Dynamic Templates', route: 'step-7' },
      { id: 'step-8', title: '8. @for Loop', route: 'step-8' },
      { id: 'step-9', title: '9. Services', route: 'step-9' },
      { id: 'step-10', title: '10. Routing', route: 'step-10' },
      { id: 'step-11', title: '11. Details Page', route: 'step-11' },
      { id: 'step-12', title: '12. Forms', route: 'step-12' },
      { id: 'step-13', title: '13. Search', route: 'step-13' },
      { id: 'step-14', title: '14. HTTP', route: 'step-14' },
    ]
  },
  {
    id: 'deferrable-views',
    title: 'Deferrable Views',
    description: 'Lazy rendering with @defer blocks.',
    icon: '⏳',
    steps: [
      { id: 'step-1', title: '1. What Are Deferrable Views', route: 'step-1' },
      { id: 'step-2', title: '2. Loading / Error / Placeholder', route: 'step-2' },
      { id: 'step-3', title: '3. Defer Triggers', route: 'step-3' },
    ]
  },
  {
    id: 'extended-learning',
    title: 'Extended Learning',
    description: 'Best practices and advanced patterns from angular.dev.',
    icon: '🎓',
    steps: [
      { id: 'el-1', title: 'Adev Best Practices', route: 'best-practices' },
    ],
  },
];
