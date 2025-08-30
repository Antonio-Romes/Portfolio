import { Injectable, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = signal<Theme>('light');
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    // Initialize theme from localStorage or system preference
    this.initializeTheme();

    // Effect to update DOM when theme changes (only in browser)
    effect(() => {
      if (this.isBrowser) {
        document.documentElement.setAttribute('data-theme', this.currentTheme());
        this.saveToStorage(this.currentTheme());
      }
    });
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
    if (!this.isBrowser) {
      // Default to light theme on server
      this.currentTheme.set('light');
      return;
    }

    const savedTheme = this.loadFromStorage();

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      this.currentTheme.set(savedTheme);
    } else {
      const prefersDark = this.getSystemPreference();
      this.currentTheme.set(prefersDark ? 'dark' : 'light');
    }
  }

  private saveToStorage(theme: Theme): void {
    if (this.isBrowser) {
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  }

  private loadFromStorage(): Theme | null {
    if (!this.isBrowser) {
      return null;
    }

    try {
      return localStorage.getItem('theme') as Theme;
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
      return null;
    }
  }

  private getSystemPreference(): boolean {
    if (!this.isBrowser) {
      return false; // Default to light theme on server
    }

    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.warn('Failed to detect system color scheme preference:', error);
      return false;
    }
  }

  isDarkMode(): boolean {
    return this.currentTheme() === 'dark';
  }

  isLightMode(): boolean {
    return this.currentTheme() === 'light';
  }
}
