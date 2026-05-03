# Angular Learning Lab — Architecture & Setup Guide

## 1. Overview

The **Angular Learning Lab** is a standalone Angular 19 application designed for practicing the official Angular tutorials. Instead of struggling with the monorepo's Bazel build system, we've built a clean, properly-architected app that follows Angular best practices.

**Key Design Decisions:**
- `tutorials/` and `tutorials-reference/` are **reference-only** folders — we never run code from them directly.
- All demo code lives inside `src/app/features/`, organized by tutorial category.
- Tutorial code is broken down into **granular file types** (models, components, pages, routes) following enterprise Angular patterns.
- **Standalone Components** exclusively — no NgModules.
- **Lazy-loaded feature routes** for each tutorial category.

---

## 2. Project Structure

```text
ng-learning-lab/
├── doc/                           # Documentation (you are here)
├── tutorials/                     # REFERENCE ONLY — raw tutorial source from angular.dev
├── tutorials-reference/           # REFERENCE ONLY — additional tutorial assets
│
├── src/
│   ├── app/
│   │   ├── core/                  # App shell — loaded once
│   │   │   ├── layout/
│   │   │   │   ├── main-layout/   # Root layout shell (sidebar + header + content)
│   │   │   │   ├── sidebar/       # Left sidebar with collapsible category navigation
│   │   │   │   └── header/        # Top header bar
│   │   │   └── models/
│   │   │       ├── navigation.model.ts     # NavItem, TutorialCategory, TutorialStep interfaces
│   │   │       └── tutorial-registry.ts    # Central data registry of all tutorials & steps
│   │   │
│   │   ├── shared/                # Reusable components used across features
│   │   │   └── components/
│   │   │       └── coming-soon/   # Placeholder for unimplemented steps
│   │   │
│   │   ├── features/              # One folder per tutorial category
│   │   │   ├── learn-angular/     # "Learn Angular" tutorial (5 steps implemented)
│   │   │   │   ├── pages/         # Routable page components (step1–step5)
│   │   │   │   └── learn-angular.routes.ts
│   │   │   ├── signals/           # "Signals" tutorial (10 steps implemented)
│   │   │   │   └── signals.routes.ts
│   │   │   ├── signal-forms/      # "Signal Forms" tutorial (5 steps implemented)
│   │   │   │   └── signal-forms.routes.ts
│   │   │   ├── first-app/         # "First App (Homes)" tutorial (14 steps implemented)
│   │   │   │   └── first-app.routes.ts
│   │   │   └── deferrable-views/  # "Deferrable Views" tutorial (3 steps implemented)
│   │   │       └── deferrable-views.routes.ts
│   │   │
│   │   ├── pages/                 # Global pages (not tutorial-specific)
│   │   │   └── home/              # Dashboard landing page with tutorial cards
│   │   │
│   │   ├── app.ts                 # Root component — minimal, just <router-outlet>
│   │   ├── app.config.ts          # App config: router, animations, zone
│   │   └── app.routes.ts          # Root routes with lazy-loaded features
│   │
│   ├── main.ts                    # Bootstrap entry point
│   ├── index.html                 # HTML shell
│   └── styles.css                 # Global styles (Inter font, CSS variables, scrollbars)
│
├── angular.json                   # Angular CLI build config
├── package.json                   # Angular 19.2 dependencies
├── tsconfig.json                  # Base TypeScript config
└── tsconfig.app.json              # App-specific TS config (excludes tutorials/)
```

---

## 3. UI Layout

The app uses a **Three-Pane Layout**:

```
┌──────────────┬────────────────────────────────────────────┐
│              │  Header (title + "Practice Mode" badge)    │
│   Sidebar    ├────────────────────────────────────────────┤
│              │                                            │
│  🏠 Home     │  Main Content Area                         │
│              │                                            │
│  📘 Learn    │  (router-outlet renders the active         │
│    ├ Step 1  │   tutorial step component here)            │
│    ├ Step 2  │                                            │
│    └ Step 3  │                                            │
│              │                                            │
│  ⚡ Signals  │                                            │
│  📝 Forms    │                                            │
│  🏠 Homes   │                                            │
│  ⏳ Defer    │                                            │
│              │                                            │
└──────────────┴────────────────────────────────────────────┘
```

- **Left Sidebar** (dark theme): Collapsible tutorial categories with animated expand/collapse.
- **Header**: Shows app title and a "Practice Mode" badge.
- **Content Area**: Renders the active step's demo component.

---

## 4. Routing Architecture

### Root Routes (`app.routes.ts`)
```
/                        → Home dashboard (tutorial cards grid)
/learn-angular/step-1    → Learn Angular, Step 1
/signals/step-3          → Signals, Step 3
/signal-forms/step-2     → Signal Forms, Step 2
...etc
```

### Lazy Loading
Each tutorial category is lazy-loaded using `loadChildren`:
```typescript
{
  path: 'learn-angular',
  loadChildren: () =>
    import('./features/learn-angular/learn-angular.routes').then(m => m.learnAngularRoutes),
}
```
This keeps the initial bundle small and only loads tutorial code when you navigate to it.

---

## 5. Angular Patterns Used

| Pattern | Where | Why |
|---------|-------|-----|
| **Standalone Components** | Every component | No NgModules — modern Angular best practice |
| **Lazy-loaded Routes** | `app.routes.ts` → feature routes | Performance: only load code when navigated to |
| **Feature-based Folder Structure** | `src/app/features/*` | Scalability: each tutorial is self-contained |
| **Smart/Presentational Split** | Pages vs child components | Separation of concerns |
| **Central Data Registry** | `tutorial-registry.ts` | Single source of truth for sidebar + routing |
| **Typed Models** | `navigation.model.ts` | Type safety for navigation items |
| **Angular Animations** | `@expandCollapse` on sidebar | Smooth UX for category toggle |
| **CSS Custom Properties** | `styles.css` | Consistent theming, easy to change |

---

## 6. How to Run

```powershell
cd "e:\KHOA\HAPPY_CODING\CODER THAN THANH\ng-learning-lab"
npm install
npm start
```
Open `http://localhost:4200`.

### Cleanup (one-time)
Delete these leftover files from the previous iteration:
```powershell
del src\app\app.component.ts src\app\app.html src\app\app.css
```

---

## 7. How to Add a New Tutorial Step

1. **Create the component** in `src/app/features/<category>/pages/stepN.component.ts`.
2. **Register the route** in the feature's route file (e.g., `learn-angular.routes.ts`).
3. **Add to the registry** in `src/app/core/models/tutorial-registry.ts` (if adding a brand new step).

The sidebar will automatically pick up the new entry from the registry.

---

## 8. Known Limitations & Adaptations

- **Signal Forms and Advanced Signals**: Some official tutorials reference `@angular/forms/signals` and newer APIs (like `resource` or `linkedSignal`) which are Angular 22+ features. Since this project is pinned to Angular 19.2 for stability, these steps have been **adapted** using Angular 19's `ReactiveFormsModule` and standard `computed()`/`effect()` signals to achieve the exact same functionality and learning outcomes.
- The `tutorials/` and `tutorials-reference/` folders are excluded from compilation (`tsconfig.app.json`) — they exist purely as code reference.

---

## 9. Theme System (Dark Mode)

The application features a robust, reactive theme system migrated from the `angular.dev` architecture.

### How it Works
1.  **ThemeService**: A central reactive service that manages the `theme` state (light, dark, or system) using an Angular **Signal**.
2.  **Persistence**: The service automatically syncs the preferred theme to `localStorage`.
3.  **System Detection**: It listens to the `(prefers-color-scheme: dark)` media query to support the "System" setting.
4.  **DOM Manipulation**: The service applies/removes the `.dark-mode` class on the `<html>` root element.

### CSS Variables & Overrides
The project uses **CSS Custom Properties (Variables)** for all colors. When the `.dark-mode` class is active, these variables are overridden in `styles.css`:

```css
/* Light Mode (Default) */
:root {
  --bg-body: #f0f2f5;
  --text-main: #1e293b;
}

/* Dark Mode Overrides */
.dark-mode {
  --bg-body: #0f172a;
  --text-main: #f1f5f9;
}
```

By using `var(--bg-body)` instead of hardcoded colors in component styles, the entire UI updates instantly when the theme is toggled.

### Best Practice: Avoid Hardcoded Colors
When building components, **never** hardcode colors like `color: #334155;` in the component's `styles` array if you want dark mode to work. Always use the provided CSS variables (e.g., `var(--text-main)`) so the text adapts automatically to the active theme.

