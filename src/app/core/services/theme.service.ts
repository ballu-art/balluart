import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly isDarkSignal = signal<boolean>(this.getInitialTheme());
  readonly isDark$ = this.isDarkSignal.asReadonly();
  readonly isDark = this.isDarkSignal.asReadonly();

  constructor() {
    // Apply theme effect
    effect(() => {
      const isDark = this.isDarkSignal();
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  private getInitialTheme(): boolean {
    const stored = localStorage.getItem('theme');
    if (stored) {
      return stored === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggle(): void {
    this.isDarkSignal.update(current => !current);
  }

  setDark(isDark: boolean): void {
    this.isDarkSignal.set(isDark);
  }
}
