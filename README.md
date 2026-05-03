# Angular Essential Tutorials (v19)

A comprehensive, production-ready environment for mastering Angular 19+ through official tutorials and advanced best practices.

This project migrates the official Angular tutorials into a modern, feature-based architecture that is easy to navigate, study, and expand.

## 🚀 Key Features

- **Modular Architecture**: Every tutorial module (Signals, Signal Forms, First App, Deferrable Views) is isolated as a lazy-loaded feature.
- **Interactive Learning Experience**: 
  - **Dynamic Sidebar**: Collapsible navigation driven by a central `TUTORIAL_REGISTRY`.
  - **Step Navigation**: Next/Previous arrows in the header for a seamless walkthrough experience.
- **Modern Angular 19+ Patterns**:
  - **Signals Everywhere**: State management using `signal()`, `computed()`, and `effect()`.
  - **Standalone Components**: 100% NgModule-free.
  - **Control Flow**: Clean template logic using `@if`, `@for`, and `@defer`.
  - **Advanced State**: Utilization of `linkedSignal` and Signal-based view queries (`viewChild`).
- **Comprehensive Documentation**: Detailed architecture plans and tutorial guides included in the `/doc` folder.

## 📂 Project Structure

- `src/app/features/`: Contains all interactive tutorial modules.
- `src/app/core/`: Application shell, layout components, and central navigation logic.
- `doc/`: Deep-dive documentation on architecture and tutorial content.
- `tutorials/`: (Reference Only) Original source files from the official Angular documentation.

## 🛠️ How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Explore**:
   Open [http://localhost:4200](http://localhost:4200) in your browser.

## 🌿 Branches

- **`main`**: Contains the core official tutorials (Fundamentals, Signals, Forms, First App).
- **`extended-learning`**: Includes advanced patterns, `linkedSignal` demos, custom directives, and "adev" (angular.dev) best practices.

---
Built with ❤️ for Angular developers.
