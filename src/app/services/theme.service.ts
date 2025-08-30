import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = signal<Theme>('light');

  constructor() {
    // Effect to update DOM when theme changes
    // effect(() => {
    //   document.documentElement.setAttribute('data-theme', this.currentTheme());
    //   localStorage.setItem('theme', this.currentTheme());
    // });
  }

  getCurrentTheme() {
    return this.currentTheme.asReadonly();
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.currentTheme.set(newTheme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme;

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      this.currentTheme.set(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme.set(prefersDark ? 'dark' : 'light');
    }
  }

  isDarkMode(): boolean {
    return this.currentTheme() === 'dark';
  }

  isLightMode(): boolean {
    return this.currentTheme() === 'light';
  }
}
