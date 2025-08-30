import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private currentSection = signal<string>('home');

  constructor() {}

  getCurrentSection() {
    return this.currentSection.asReadonly();
  }

  smoothScrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 70; // Fixed header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });

      this.currentSection.set(elementId);
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.currentSection.set('home');
  }

  private setupScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.updateCurrentSection();
    });
  }

  private updateCurrentSection(): void {
    const sections = ['home', 'about', 'projects', 'technologies'];
    const scrollPosition = window.scrollY + 100; // Offset for header

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          this.currentSection.set(sectionId);
          break;
        }
      }
    }
  }
}
