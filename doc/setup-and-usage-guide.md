# Angular Learning Lab Guide

This document outlines the setup, purpose, and usage of the `ng-learning-lab` project. This project was created to provide a simple, isolated environment to practice the official Angular tutorials without dealing with the complexity of the main Angular monorepo (Bazel, pnpm, etc.).

## 1. Project Purpose
The official Angular repository (`angular/angular`) uses Bazel and a complex content pipeline to generate the `angular.dev` website. The interactive tutorials you see on the site are generated from small code fragments. 

Trying to build and run those fragments directly within the massive Angular monorepo on Windows can cause build errors (like missing Sass toolchains). 

To solve this, we created **`ng-learning-lab`**: a minimalist, standard Angular CLI-style application. It provides a clean slate where you can copy-paste the tutorial code and run it using standard, simple tools.

## 2. Setup Process (What we did)

1. **Created a Minimal Angular Setup:** We bypassed the Angular CLI generator to create a completely stripped-down configuration (`package.json`, `angular.json`, `tsconfig.json`, and a basic `src/` folder) specifically designed to mirror the starting point of the `angular.dev` tutorials.
2. **Copied the Tutorial Source:** We copied all 600+ files from the official Angular repository (`angular/adev/src/content/tutorials`) into the `tutorials/` directory of this lab. This gives you offline access to every step of every official tutorial.
3. **Switched to NPM:** To keep things as simple as possible, we opted to use standard `npm` instead of `pnpm` or `yarn`.

## 3. Project Structure

```text
ng-learning-lab/
├── doc/                 # Documentation (this folder)
├── src/                 # YOUR practice area
│   ├── app/             
│   │   └── app.ts       # The main component you will edit
│   ├── index.html       
│   ├── main.ts          # Bootstraps your app.ts component
│   └── styles.css       
├── tutorials/           # The official Angular tutorial files (reference)
│   ├── first-app/       # The "Homes" application tutorial
│   ├── learn-angular/   # Short, focused steps on Angular fundamentals
│   └── ...
├── angular.json         # Simplified build configuration
├── package.json         # Standard dependencies (Angular 19)
└── tsconfig.json        # TypeScript configuration
```

## 4. How to Practice

To start practicing, follow these steps:

### Step A: Start the Development Server
Open your terminal, navigate to the `ng-learning-lab` directory, install the dependencies (if you haven't already), and start the server:

```powershell
cd "e:\KHOA\HAPPY_CODING\CODER THAN THANH\ng-learning-lab"
npm install
npm start
```
Open your browser to `http://localhost:4200`.

### Step B: Follow a Tutorial
1. Browse into the `tutorials/` folder and pick a tutorial path. For example, to start the basics, go to:
   `tutorials/learn-angular/steps/1-components-in-angular/`
2. Read the instructions provided in that step's folder (usually in a `README.md` or `description.md` file, or you can read along on the official `angular.dev` website).

### Step C: Apply the Code
1. Look at the code provided in the tutorial step's `src/` folder.
2. **Copy** that code and **paste** it into your working area: `ng-learning-lab/src/app/app.ts`.
3. Save the file. Your browser will automatically refresh, and you can see the results of the tutorial step immediately.

Repeat Steps B and C as you progress through the tutorials!
