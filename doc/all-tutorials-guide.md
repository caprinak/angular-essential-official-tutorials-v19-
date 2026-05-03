# Angular Learning Lab — Comprehensive Tutorials Guide

Welcome to the comprehensive guide for the Angular Learning Lab! This document outlines all the tutorial modules available in this project, explaining what each covers and the key Angular concepts demonstrated.

## 1. Learn Angular (Fundamentals)
**Goal:** Master the core building blocks of Angular applications.

*   **Step 1: Components:** Introduction to standalone components, the foundational UI building blocks in Angular.
*   **Step 2: Component Class:** Adding state and logic to components using TypeScript classes.
*   **Step 3: Composing Components:** Using components within other components to build complex UIs.
*   **Step 4: Control Flow (`@if`):** Using Angular's modern built-in control flow to conditionally render content.
*   **Step 5: Control Flow (`@for`):** Iterating over collections and rendering lists efficiently with `track`.
*   **Step 6: Property Binding:** Dynamically binding component properties to DOM elements (`[property]="value"`).
*   **Step 7: Event Handling:** Responding to user interactions (clicks, keyboard) using event binding (`(event)="handler()"`).
*   **Step 8: `@Input`:** Passing data from a parent component down to a child component.
*   **Step 9: `@Output`:** Emitting custom events from a child component up to a parent component.
*   **Step 10: Deferrable Views:** An introduction to lazy-loading component chunks using `@defer`.

---

## 2. Signals (State Management)
**Goal:** Learn Angular's modern, reactive state management primitive: Signals.

*   **Step 1: First Signal:** Creating and reading a basic `signal()`.
*   **Step 2: Computed Signals:** Deriving state automatically using `computed()`.
*   **Step 3: Linked Signals:** Creating signals that depend on other signals but can be independently updated.
*   **Step 4: Async Data:** Handling asynchronous operations and updating signals when data arrives.
*   **Step 5: Component Communication:** Using signals alongside Inputs and Outputs.
*   **Step 6: Two-Way Binding:** Implementing two-way data binding with signals (`[(ngModel)]`).
*   **Step 7: Signals with Services:** Centralizing state in injectable services using signals.
*   **Step 8: Signals with Directives:** Using signals to drive custom directive behavior.
*   **Step 9: Signal Queries:** Modern DOM and component querying using `viewChild()` and `contentChild()`.
*   **Step 10: Effects:** Running side-effects (like logging or DOM manipulation) when signals change using `effect()`.

---

## 3. Signal Forms
**Goal:** Build robust, type-safe forms using Reactive Forms integrated with Signals.

*   **Step 1: Setup Form Model:** Defining the form structure and data models.
*   **Step 2: Connect Template:** Binding the form model to the HTML template using `FormsModule` / `ReactiveFormsModule`.
*   **Step 3: Add Validation:** Implementing built-in and custom validators.
*   **Step 4: Display Errors:** Conditionally showing error messages based on field validity and touched state.
*   **Step 5: Submission:** Handling form submission safely and processing the gathered data.

---

## 4. First App (Homes)
**Goal:** Build a complete, functional application (a housing directory) from scratch.

*   **Step 1: Hello World:** Initializing the app shell.
*   **Step 2: Home Component:** Creating the main landing page.
*   **Step 3: Housing Location:** Creating a reusable component for individual housing listings.
*   **Step 4: Interfaces:** Defining TypeScript interfaces (`HousingLocation`) for type safety.
*   **Step 5: Inputs:** Passing listing data into the `HousingLocation` component.
*   **Step 6: Property Binding:** Binding image sources and text dynamically.
*   **Step 7: Dynamic Templates:** Using Angular template features for richer UI.
*   **Step 8: `@for` Loop:** Rendering the grid of housing locations.
*   **Step 9: Services:** Extracting data access logic into an injectable `HousingService`.
*   **Step 10: Routing:** Setting up the Angular Router to navigate between pages.
*   **Step 11: Details Page:** Creating a route with parameters to show a specific home's details.
*   **Step 12: Forms:** Adding an application form to the details page.
*   **Step 13: Search:** Implementing a client-side search filter for the housing list.
*   **Step 14: HTTP:** Connecting the service to a simulated backend using Angular's `HttpClient` (or simulated async data).

---

## 5. Deferrable Views
**Goal:** Optimize application load times by deferring the rendering of non-critical components.

*   **Step 1: What Are Deferrable Views:** The basics of the `@defer` block.
*   **Step 2: Loading / Error / Placeholder:** Managing the UI states during the lazy-loading lifecycle (`@placeholder`, `@loading`, `@error`).
*   **Step 3: Defer Triggers:** Controlling *when* loading happens using triggers like `on viewport`, `on interaction`, or `on hover`.

---

## 6. Extended Learning (Angular.dev Patterns)
**Goal:** Explore advanced, production-ready patterns inspired by the source code of `angular.dev` (adev).

*   **Adev Best Practices:** Utilizing Signal-based view queries (`viewChild`) and keeping logic pure with `computed()`.
*   **Advanced Components:** Implementing sophisticated state-resetting patterns using Angular 19's `linkedSignal`.
*   **Custom Pipes:** Building pure pipes (e.g., `TimeAgoPipe`) for highly performant data transformation in templates.
*   **Custom Directives:** Enhancing UX with reusable directives like `ClickOutsideDirective` and `ExternalLinkDirective`.
