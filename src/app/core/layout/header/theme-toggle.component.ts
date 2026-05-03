import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="theme-btn" (click)="themeService.toggleTheme()" [title]="'Switch to ' + (themeService.theme() === 'light' ? 'dark' : 'light') + ' mode'">
      <span class="icon">{{ themeService.theme() === 'light' ? '🌙' : '☀️' }}</span>
    </button>
  `,
  styles: [`
    .theme-btn {
      background: none;
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 8px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      width: 36px;
      height: 36px;
    }
    .theme-btn:hover {
      background: rgba(0, 0, 0, 0.05);
      border-color: var(--primary-color);
    }
    .icon { font-size: 1.2rem; line-height: 1; }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
}
