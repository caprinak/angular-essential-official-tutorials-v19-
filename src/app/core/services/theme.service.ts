import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  
  private readonly THEME_KEY = 'lab-theme-preference';
  
  theme = signal<Theme>(this.getSavedTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
      this.saveTheme(currentTheme);
    });

    if (isPlatformBrowser(this.platformId)) {
      this.watchSystemTheme();
    }
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }

  toggleTheme() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }

  private applyTheme(theme: Theme) {
    if (!isPlatformBrowser(this.platformId)) return;

    const root = this.document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    } else {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    }
  }

  private getSavedTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) return 'light';
    return (localStorage.getItem(this.THEME_KEY) as Theme) || 'system';
  }

  private saveTheme(theme: Theme) {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem(this.THEME_KEY, theme);
  }

  private watchSystemTheme() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.theme() === 'system') {
        this.applyTheme('system');
      }
    });
  }
}
