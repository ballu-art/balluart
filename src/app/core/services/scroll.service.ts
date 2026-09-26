import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly scrollY = signal<number>(0);
  readonly scrollY$ = this.scrollY.asReadonly();

  private readonly scrollProgressSignal = signal<number>(0);
  readonly scrollProgress$ = this.scrollProgressSignal.asReadonly();
  readonly scrollProgress = this.scrollProgressSignal.asReadonly();

  constructor() {
    this.setupScrollListener();
  }

  private setupScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.scrollY.set(window.scrollY);
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (window.scrollY / (documentHeight - windowHeight)) * 100;
      
      this.scrollProgressSignal.set(Math.min(progress, 100));
    });
  }

  scrollToElement(selector: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
